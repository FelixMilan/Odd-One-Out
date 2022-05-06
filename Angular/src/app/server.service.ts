import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { Router } from "@angular/router"
import { ifError } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket: any;
  lobbyCode: string = '';
  gameState: any;
  celebName?: string;

  isPlayer: boolean=true;

  inputCeleb(celebName: string): void {
    this.socket.emit('inputCeleb', celebName);
  }

  inputDrawing(drawing: string): void {
    this.socket.emit('draw', drawing);
  }

  inputVote(drawingId: number): void {
    this.socket.emit('voteDrawing', drawingId);
  }

  inputArtist(drawingId: number): void {
    this.socket.emit('voteArtist', drawingId);
  }

  join(nickname: string, lobbyCode: string): void {
    this.connect();
    this.socket.emit('join', nickname, lobbyCode);
  }

  create(): void {
    this.connect();
    this.socket.emit('create');
  }

  start(lobbyCode: string): void {
    this.socket.emit('start', lobbyCode);
  }

  getLobbyCode(): string {
    return this.lobbyCode;
  }

  getGameState(): any {
    return this.gameState;
  }

  getCelebName(): string | undefined {
    return this.celebName;
  }

  connect(): void {
    if (this.socket) return;
    this.socket = io('https://game.retailparody.com/', {
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('Connected to the server');

      this.socket.on('newGame', (lobbyCode: string) => {
        console.log(`New game created. Lobby code: ${lobbyCode}`);

        this.isPlayer = false;
        this.lobbyCode = lobbyCode;

        this.router.navigate(["/game/lobby-page"])
      });

      this.socket.on('joined',
        (name: string, lobbyCode: string) => {
          console.log(`Player, ${name} joined the server ${lobbyCode}`);
          this.lobbyCode = lobbyCode;
          this.isPlayer = true;
          this.router.navigate(["/game/join-page"])
        });

      this.socket.on('kick', (reason: string) => {
        alert("You were kicked: " + reason);
      });

      this.socket.on('error', (error: string) => {
        alert(error);
        console.log(error);
        // Possible errors:
        // - wrong status (when you pick a celeb but its not in INPUT_NAMES status)
        // - already inputted (when you inputted a celeb name twice)
        // 
      });

      this.socket.on('celebPicked', (celebName: string) => {
        console.log(`${celebName} has been picked for you`);
        this.celebName = celebName;
      });

      this.socket.on('gameState', (gameState: any) => {
        const {
          lobbyCode, // AEB5
          status, // lobby, input_names, drawing, voting, end
          timeLeft, // in seconds (for VOTING status and DRAWING status)
          players, // array of player objects ({ name="NAME OF YOU", drawn=true/false, votedArtist="NAME OF OTHER PERSON" })
          drawings, // array of drawings ({ id=1, drawing=BASE64..., celebName="" (ONLY END STATUS), playerName="" (ONLY END STATUS) })
          oddOneOut, // ID of drawing that is the odd one out image (ONLY VOTING STATUS)
        } = gameState;
        console.log(gameState);

        const previousStatus = this.gameState?.status;
        const newStatus = gameState?.status;

        if (previousStatus === "lobby") {
          if (newStatus === "input_names") {
            if (this.isPlayer) {
              this.router.navigate(["/game/writing-screen-client"]);
            } else {
              this.router.navigate(["/game/writing-screen-host"]);
            }
          }
        } else if (previousStatus === "input_names") {
          if (newStatus === "drawing") {
            if(this.isPlayer){
              this.router.navigate(["/game/draw-client"]);
            } else{
              this.router.navigate(["/game/draw-host"]);
            }
          }
        } else if (previousStatus === "drawing") {
          if (newStatus === "voting") {
            if(this.isPlayer){
              this.router.navigate(["/game/vote-client"]);
            } else{
              this.router.navigate(["/game/vote-host"]);
            }
          }
        } else if (previousStatus === "voting") {
          if (newStatus === "end") {
            if(this.isPlayer){
              this.router.navigate(["/game/leaderboard-client"]);
            } else{
              this.router.navigate(["/game/leaderboard-host"]);
            }
          }
        }


        this.gameState = gameState;
      });
    });
  }

  constructor(public router: Router) { }
}
