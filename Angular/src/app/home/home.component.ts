import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { LobbyService } from '../lobby.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nickname: string = '';
  lobbyCode: string = '';
  socket: any;

  hostRoom(): void {
    this.lobbyService.create(this.socket);
  }

  addPlayer(nickname: string, lobbyCode: string): void {
    this.lobbyService.join(nickname, lobbyCode);
  }

  constructor(private lobbyService: LobbyService, private serverService: ServerService) { }

  ngOnInit(): void {
    this.socket = io('http://localhost:3000/', {
    transports: ['websocket']
  });
  }

}