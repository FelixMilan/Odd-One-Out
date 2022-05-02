import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [];

  getPlayers(): void {
    let players = of(PLAYERS);
    players.subscribe(players => this.players = players);
  }

  constructor() { }
}
