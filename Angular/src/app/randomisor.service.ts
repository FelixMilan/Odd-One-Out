import { Injectable } from '@angular/core';

import { PlayerService } from './player.service';

import { namePool } from './name-pool';

@Injectable({
  providedIn: 'root'
})
export class RandomisorService {

  setOddOneOut() {
    
  }

  updatePlayers() {

  }

  getPlayers() {
    return this.playerService.getPlayers;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  constructor(private playerService: PlayerService) { }
}
