import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css'],
})
export class LobbyPageComponent implements OnInit {

  lobbyCode?: string;
  players?: any;

  constructor(private serverService: ServerService) { }

  checkInterval: any=null;

  ngOnInit(): void {
    this.lobbyCode = this.serverService.getLobbyCode();

    this.checkInterval = setInterval(() => {
       this.players = this.serverService.getGameState().players.map((player: any) => {
         return player?.name;
       });
    }, 500);
  }

  startGame(): void {
    if (!this.lobbyCode) return alert("Not in a lobby")
    this.serverService.start(this.lobbyCode);
  }

  ngOnDestroy(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }

}
