import { Injectable } from '@angular/core';

import { NAMEPOOL } from './name-pool';
import { PlayerRole } from './player-role';
import { Player } from './player';
import { Observable, of } from 'rxjs';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class RandomisorService {

  namePool: String[] = [];

  getNamePool(): void {
    let namePool = of(NAMEPOOL);
    namePool.subscribe(namePool => this.namePool = namePool);
  }

  setChosenName(): void {
    let chosenIndex: number = this.getRandomInt(0, this.namePool.length);

    //for (let player of players)
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor() { }
}
