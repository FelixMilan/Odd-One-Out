import { Injectable } from '@angular/core';
import { Player } from './player';
import { PlayerRole } from './player-role';
import { PlayerService } from './player.service';
import { RandomisorService } from './randomisor.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players: Player[] = [];
  chosenName?: string;
  oddOneOutChosenName?: string;

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
  }
  
  getNamePool(): void {
    this.randomisorService.getNamePool();
  }

  setOddOneOut(): void {
    let rand = this.randomisorService.getRandomInt(0, this.players.length);
    
    this.players[rand].role = PlayerRole.ODDONEOUT;

    this.playerService.updatePlayer(this.players[rand])
    .subscribe();
  }

  chooseNamesFromPool(): void {
    this.chosenName = this.randomisorService
    .getRandomNameFromPool().name;
    this.oddOneOutChosenName = this.randomisorService
    .getRandomNameFromPool().name;

    while (this.oddOneOutChosenName === this.chosenName) {
      this.oddOneOutChosenName = this.randomisorService
      .getRandomNameFromPool().name;
    }
  }
  
  constructor(private playerService: PlayerService, 
    private randomisorService: RandomisorService) { }
}
