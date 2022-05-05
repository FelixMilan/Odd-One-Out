import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  socket: any;

  join(nickname: string, lobbyCode: string): void {
    this.serverService.socket.emit('join', nickname, lobbyCode);
  }

  create(socket: any): void {
    this.socket = socket;

    this.serverService.connect(this.socket);
    this.serverService.socket.emit('create');
  }

  start(): void {
    this.serverService.socket.emit('start');
  }

  getLobbyCode(): string {
    return this.serverService.getLobbyCode();
  }

  constructor(private serverService: ServerService) { }
}
