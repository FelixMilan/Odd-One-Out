import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Player } from './player';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    let players = of(PLAYERS);
    return players;
  }

  updatePlayer(player: Player): Observable<Player> {
    let updatedPlayer = of(player);
    return updatedPlayer;
  }

  constructor() { }
}
