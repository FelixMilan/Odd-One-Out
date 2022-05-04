import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game-host.component.html',
  styleUrls: ['./game-host.component.css']
})
export class GameHostComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getPlayers;
    this.getNamePool;
    this.setOddOneOut;
    this.chooseNamesFromPool;
  }

  getPlayers(): void {
    this.gameService.getPlayers;
  }
  
  getNamePool(): void {
    this.gameService.getNamePool();
  }

  setOddOneOut(): void {
    this.gameService.setOddOneOut;
  }

  chooseNamesFromPool(): void {
    this.gameService.chooseNamesFromPool;
  }
}
