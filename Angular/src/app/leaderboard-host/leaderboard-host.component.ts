import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-leaderboard-host',
  templateUrl: './leaderboard-host.component.html',
  styleUrls: ['./leaderboard-host.component.css']
})
export class LeaderboardHostComponent implements OnInit {

  oddOneOutPlayer: string='';
  oddOneOutCeleb: string='';
  oddOneOutDrawing: string='';

  playerCorrect=[]
  playerIncorrect=[];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    const oddOneOutDrawingId = this.serverService.getGameState().oddOneOut;
    const drawings = this.serverService.getGameState().drawings;
    const drawing = drawings.find((d: any) => d.id === oddOneOutDrawingId);

    this.oddOneOutPlayer = drawing?.playerName ?? "UNKNOWN";
    this.oddOneOutCeleb = drawing?.celebName ?? "UNKNOWN";
    this.oddOneOutDrawing = drawing?.drawing ?? "";
  }

}
