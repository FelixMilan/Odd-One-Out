import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { RandomisorService } from './randomisor.service';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  getPlayers(): void {
    this.playerService.getPlayers()
  }

  getNamePool(): void {
    this.randomisorService.getNamePool();
  }

  constructor(private playerService: PlayerService,
    private randomisorService: RandomisorService) { }
}
