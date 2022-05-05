import { Component, OnInit } from '@angular/core';
import { IOService } from '../io.service';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  players: any;
  lobbyCode?: string;

  updatePlayers() {
    //this.players = this.lobbyService.
  }

  constructor(private lobbyService: LobbyService, private ioService: IOService) { }

  ngOnInit(): void {
    this.lobbyCode = this.lobbyService.getLobbyCode();
  }

}
