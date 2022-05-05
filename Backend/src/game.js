const config = require("./config");

class Player {
    name;
    socket;
    celebName;
    votedImage = -1;
    votedArtist;

    drawing;
    drawingId = -1;
    
    constructor(socket, name){
        this.socket = socket;
        this.name = name;
    }
}

const convertPlayerToInfoPlayer = (player, game) => {
    return {
        name: player.name,
        drawn: player.drawing ? true : false,
        votedArtist: game.status === GameStatus.END ? player.votedArtist : undefined,
    }
}

const convertPlayerToDrawing = (player, game) => {
    if (
        game.status !== GameStatus.VOTING &&
        game.status !== GameStatus.END
        ) return;
    return {
        id: player.drawingId,
        drawing: player.drawing,
        celebName: game.status === GameStatus.END ? player.celebName : undefined,
        playerName: game.status === GameStatus.END ? player.name : undefined,
    }
}
const GameStatus = {
    LOBBY: "lobby",
    INPUT_NAMES: "input_names",
    DRAWING: "drawing",
    VOTING: "voting",
    END: "end"
}

class Game {
    lastDrawingId = 0;
    
    players = [];
    status = GameStatus.LOBBY;
    lobbyCode;
    adminClient;

    defaultCeleb;
    oddOneOutCeleb;
    oddOneOut;

    timeLeft = config.maxDrawingTime;

    constructor(lobbyCode, adminClient){
        this.lobbyCode = lobbyCode;
        this.adminClient = adminClient;
    }

    joinGame = (socket, name) => {
        const isAdmin = socket.id === this.adminClient.id;

        if ( /[^A-Za-z0-9_]/.test( name ) ) {
            throw new Error("invalid name: A-z, 0-9 and _ allowed")
        }

        if (this.status !== GameStatus.LOBBY){
            throw new Error("game in progress");
        }

        if(this.players.length >= config.maxPlayers){
            if (isAdmin) {
                const player = this.players[Math.floor(Math.random() * this.players.length)];
                this.kickPlayer(player.name, "replaced by admin");
            } else { 
            throw new Error("lobby is full");
            }
        }

        const playerByName = this.players.find(player => player.name === name);
        if(playerByName){
            if(isAdmin){
                this.kickPlayer(playerByName.name, "admin took your name");
            } else {
                throw new Error("name already in use")
            }
        }

        const player = new Player(socket, name);
        this.players.push(player);

        socket.emit("joined", name, this.lobbyCode);

        this.broadcastGameState();

        return player;

    }

    kickPlayer = (name, reason = "Kicked by admin") => {
        const player = this.players.find(player => player.name === name);
        if(!player){
            throw new Error("player not found");
        }
        this.leaveGame(player);
        player.socket.emit("kick", reason)
    }

    leaveGame = (player) => {
        const index = this.players.indexOf(player);
        if (index == -1) return;

        this.players.splice(index, 1);

        this.broadcastGameState();
    }

    pickCeleb = (player, celebName) => {
        if(game.status !== GameStatus.INPUT_NAMES){
            return socket.emit("error", "wrong status");
        }
        if (player.celebName){
            return socket.emit("error", "already inputted");
        }
        player.celebName = celebName;
        
        this.checkGameStatus();
    }

    submitDrawing = (player, drawing) => {
        if(this.status !== GameStatus.DRAWING){
            throw new Error("wrong status");
        }
        player.drawing = drawing;
    }

    checkGameStatus = () => {
        if(this.status === GameStatus.INPUT_NAMES){
            const allPlayersHaveCelebNames = this.players.every(player => player.celebName);
            if(allPlayersHaveCelebNames){
                const celebs = this.players.map(player => player.celebName);
                const randomCelebs = celebs.sort(() => Math.random() - 0.5);

                const defaultName = randomCelebs[0];
                const oddOneOut = randomCelebs[1];

                this.defaultCeleb = defaultName;
                this.oddOneOutCeleb = oddOneOut;

                this.oddOneOut = this.players[Math.floor(Math.random() * this.players.length)];

                for(const player of this.players){
                    if(player != this.oddOneOut){
                        player.socket.emit("celebPicked", defaultName);
                    } else {
                        player.socket.emit("celebPicked", oddOneOut);
                    }
                }

                this.status = GameStatus.DRAWING;

                this.broadcastGameState();

                this.tickDrawing();

            }
        } else if (this.status === GameStatus.DRAWING) {
            const allPlayersHaveDrawings = this.players.every(player => player.drawing);
            if(allPlayersHaveDrawings) {
                this.finishDrawing();
            }
        } else if (this.status === GameStatus.VOTING){
            const allPlayersHaveVoted = this.players.every(player => player.votedImage !== -1);
            if(allPlayersHaveVoted) {
                this.finishVoting();
            }
        }
    }

    finishVoting = () => {
        this.status = GameStatus.END;

        this.broadcastGameState();
    }

    finishDrawing = () => {
        this.status = GameStatus.VOTING;

        this.players.sort(() => {
            return Math.random() - 0.5;
        }).forEach((player, index) => {
            player.drawingId = index;
        });

        this.timeLeft = config.maxVotingTime;
        this.tickVoting();

    }

    tickDrawing = () => {
        this.checkGameStatus();
        if(this.status === GameStatus.DRAWING){
            if(this.timeLeft <= 0) {
                this.finishDrawing();
            }
            this.broadcastGameState();
            this.timeLeft -= 1;
            setTimeout(this.tickDrawing, 1000);
        }
    }

    tickVoting = () => {
        this.checkGameStatus();
        if(this.status === GameStatus.VOTING) { 
            if(this.timeLeft <= 0) {
                this.finishVoting();
            }
            this.broadcastGameState();
            this.timeLeft -= 1;
            setTimeout(this.tickVoting, 1000);
        }
    }

    voteDrawing = (player, drawingId) => {
        if(this.status !== GameStatus.VOTING) {
            throw new Error("wrong status");
        }

        if(player.votedImage !== -1) {
            throw new Error("already voted");
        }

        player.votedImage = drawingId;

        this.checkGameStatus();
    }

    voteArtist = (player, artist) => {
        if (this.status !== GameStatus.VOTING) {
            throw new Error("wrong status");
        }
        if(player.votedArtist) {
            throw new Error("already voted");
        }
        player.votedArtist = artist;
    }

    startGame = () => {
        this.status = GameStatus.INPUT_NAMES;
        this.broadcastGameState();
    }

    broadcastGameState = () => {

        let oddOneOut = -1;
        if(this.status === GameStatus.VOTING){
            oddOneOut = this.oddOneOut?.drawingId ?? -1;
        }


        let end;
        if(this.status === GameStatus.END){
            
        }

        const gameState = {
            lobbyCode: this.lobbyCode,
            status: this.status,
            timeLeft: this.timeLeft,
            players: this.players.map(player => {
                return convertPlayerToInfoPlayer(player, this)
            }),
            drawings: this.players.map(player => {
                return convertPlayerToDrawing(player, this)
            }),
            oddOneOut: oddOneOut, 
        };

        for(const player of this.players) {
            player.socket.emit("gameState", gameState);
        }
        this.adminClient.emit("gameState", gameState);
    }
}

module.exports = {
    Player,
    GameStatus,
    Game
}