import { Injectable } from '@angular/core';
import { LeaderBoard } from './leaderboard';
import { Name } from './name';
import { Player } from './player';
import { Sketch } from './sketch';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    let players: Player[] = [
      { id: 1, name: 'David' },
      { id: 2, name: 'Janet' },
      { id: 3, name: 'Mohammed' },
      { id: 4, name: 'Michelle' }
    ];

    let namePool: Name[] = [
      {id: 1, name: 'Bob Marley'},
      {id: 2, name: 'Barack Obama'},
      {id: 3, name: 'Jigglypuff'},
      {id: 4, name: 'Taylor Swift'}
    ];

    let sketches: Sketch[] = [];

    let leaderboards: LeaderBoard[] = [];

    return {players, namePool, sketches, leaderboards};
  }

  genId(collections: any[]): number {
    return collections.length > 0 ? Math.max(...collections.map(collection => collection.id)) + 1 : 0;
  }
}
