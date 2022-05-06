import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket: any;
  lobbyCode: string = '';
  gameState: any;
  celebName?: string;

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
    this.socket.emit('join', nickname, lobbyCode);
  }

  create(): void {
    this.connect();
    this.socket.emit('create');
  }

  start(): void {
    this.socket.emit('start');
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

        this.lobbyCode = lobbyCode;

        this.router.navigate(["/game/lobby-page"])
      });

      this.socket.on('joined',
        (name: string, lobbyCode: string) => {
          console.log(`Player, ${name} joined the server ${lobbyCode}`);
          this.lobbyCode = lobbyCode;

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

        this.gameState = gameState;
      });
    });
  }

  constructor(public router: Router) { }
}
