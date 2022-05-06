import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-vote-client',
  templateUrl: './vote-client.component.html',
  styleUrls: ['./vote-client.component.css']
})
export class VoteClientComponent implements OnInit {
  title = 'vote-client';

  drawings: any[] = [];

  votedFor: number = -1;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.drawings = this.serverService.getGameState().drawings;
  }

  itemVote(drawingID: number): void{
    if (this.votedFor > -1) return;
    this.votedFor = drawingID;
    this.serverService.inputVote(drawingID);
  }

}
