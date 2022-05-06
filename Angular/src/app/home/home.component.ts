import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nickname: string = '';
  lobbyCode: string = '';

  hostRoom(): void {
    this.serverService.create();
  }

  addPlayer(): void {
    this.serverService.join(this.nickname, this.lobbyCode);
  }

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

}