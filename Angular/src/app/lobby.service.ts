import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  join(nickname: string, lobbyCode: string): void {
    this.serverService.socket.emit('join', nickname, lobbyCode);
  }

  create(): void {
    this.serverService.connect();
    this.serverService.socket.emit('create');
  }

  start(): void {
    this.serverService.socket.emit('start');
  }

  getLobbyCode(): string {
    return this.serverService.getLobbyCode;
  }

  constructor(private serverService: ServerService) { }
}
