import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerRole } from '../player-role';
import { PlayerService } from '../player.service';
import { RandomisorService } from '../randomisor.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService, 
    private randomisorService: RandomisorService) { }

  ngOnInit(): void {
    this.getPlayers;
    this.getNamePool;
    this.setOddOneOut;
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
  }
  
  getNamePool(): void {
    this.randomisorService.getNamePool();
  }

  setOddOneOut(): void {
    let rand = this.getRandomInt(0, this.players.length);
    
    this.players[rand].role = PlayerRole.ODDONEOUT;

    this.playerService.updatePlayer(this.players[rand])
    .subscribe(updatedPlayer => {
      this.players[rand] = updatedPlayer;
    });
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
