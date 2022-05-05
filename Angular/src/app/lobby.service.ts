import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  players: string[] = [];

  join(): void {
    this.serverService.socket.emit('join');
  }

  create(): void {
    this.serverService.socket.emit('create');
  }

  start(): void {
    this.serverService.socket.emit('start');
  }

  constructor(private serverService: ServerService) { }
}
