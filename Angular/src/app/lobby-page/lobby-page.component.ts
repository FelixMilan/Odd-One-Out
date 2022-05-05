import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  lobbyCode?: string;
  players?: any;

  hostRoom(): void {
    this.lobbyService.create();
  }

  constructor(private lobbyService: LobbyService, private serverService: ServerService) { }

  ngOnInit(): void {
    this.lobbyCode = this.serverService.getLobbyCode();
  }

}
