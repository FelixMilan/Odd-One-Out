import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class IOService {

  inputCeleb(celebName: string): void {
    this.serverService.socket.emit('inputCeleb', celebName);
  }

  inputDrawing(drawing: string): void {
    this.serverService.socket.emit('draw', drawing);
  }

  inputVote(drawingId: number): void {
    this.serverService.socket.emit('voteDrawing', drawingId);
  }

  inputArtist(drawingId: number): void {
    this.serverService.socket.emit('voteArtist', drawingId);
  }

  getGameState(): any {
    this.serverService.socket.emit('gameState');

    return this.serverService.getGameState();
  }

  constructor(private serverService: ServerService) { }
}
