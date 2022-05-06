import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-host',
  templateUrl: './leaderboard-host.component.html',
  styleUrls: ['./leaderboard-host.component.css']
})
export class LeaderboardHostComponent implements OnInit {

  oddOneOutPlayer: string='';
  oddOneOutCeleb: string='';

  playerCorrect=[]
  playerIncorrect=[];

  constructor() { }

  ngOnInit(): void {
  }

}
