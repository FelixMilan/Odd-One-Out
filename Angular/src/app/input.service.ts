import { Injectable } from '@angular/core';
import { Socket } from 'dgram';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  inputCeleb(celebName: string): void {
    this.serverService.socket.emit('inputCeleb', celebName);
  }

  submitDrawing(drawing: string): void {
    this.serverService.socket.emit('draw', drawing);
  }

  submitVote(drawingId: number): void {
    this.serverService.socket.emit('voteDrawing', drawingId);
  }

  submitArtist(drawingId: number): void {
    this.serverService.socket.emit('voteArtist', drawingId);
  }

  constructor(private serverService: ServerService) { }
}
