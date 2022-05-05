import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { LobbyService } from './lobby.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket?: any;
  lobbyCode?: string;

  connect(): void {
    this.socket = io('http://localhost:3000/', {
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('Connected to the server');

      this.socket.on('newGame', (lobbyCode: string) => {
        console.log(`New game created. Lobby code: ${lobbyCode}`);

        this.lobbyCode = lobbyCode;
      });

      this.socket.on('joined',
        (name: string, lobbyCode: string) => {
          console.log(`Player, ${name} joined the server ${lobbyCode}`);
        });

      this.socket.on('kick', (reason: string) => {
        console.log(reason);
      });

      this.socket.on('error', (error: string) => {
        console.log(error);
        // Possible errors:
        // - wrong status (when you pick a celeb but its not in INPUT_NAMES status)
        // - already inputted (when you inputted a celeb name twice)
        // 
      });

      this.socket.on('celebPicked', (celebName: string) => {
        console.log(`${celebName} has been picked`);
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
      })

      // HOST: When a game is created
      this.socket.on('newGame', (lobbyCode: string) => {
        console.log(lobbyCode);
      });

    });
  }



  constructor(private lobbyService: LobbyService) { }
}
