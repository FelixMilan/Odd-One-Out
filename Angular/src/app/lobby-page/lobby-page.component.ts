import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.css']
})
export class LobbyPageComponent implements OnInit {

  lobbyCode?: string;
  players?: any;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.lobbyCode = this.serverService.getLobbyCode();
  }

}
