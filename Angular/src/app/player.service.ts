import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    return players;
  }

  constructor() { }
}
