const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { Game, GameStatus } = require('./game');
const { getGameByLobbyCode, addGame, removeGame } = require('./state');
const { makeid } = require('./util');
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("create", () => {
      let game;
      while(!game){
          const id = makeid(4);
          const gameFound = getGameByLobbyCode(id);
          if (!gameFound) {
              game = new Game(id, socket);
          }
      }

      addGame(game);

      socket.emit("newGame", game.lobbyCode);


  })

  socket.on("start", (lobbyCode) => {
    const game = getGameByLobbyCode(lobbyCode)
    if(game.adminClient.id == socket.id){
        game.startGame();
    }
})

  socket.on("join", (name, lobby) => {
      if(!name?.trim()){
          return socket.emit("error", "invalid name")
      }
      if(!lobby?.trim()){
          return socket.emit("error", "invalid lobby")
      }

      const game = getGameByLobbyCode(lobby);
      if(!game){
          return socket.emit("error", "lobby does not exist");
      }

      let player;

      try { 
          player = game.joinGame(socket, name);
      } catch (err) {
          return socket.emit("error", err.message)
      }

      socket.on("draw", drawing => {
          game.submitDrawing(player, drawing);
      })

      socket.on("inputCeleb", (celebName) => {
          game.pickCeleb(player, celebName);

      })

      socket.on("voteDrawing", drawingId => {
          game.voteDrawing(player, drawingId);
      })
      
      socket.on("voteArtist", artist => {
          game.voteArtist(player, artist);
      })

      socket.on("disconnect", () => {
          game.leaveGame(player);
      })


  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});