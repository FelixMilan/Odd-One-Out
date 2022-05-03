import { Injectable } from '@angular/core';
import { Name } from './name';
import { Player } from './player';

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

    return {players, namePool};
  }
}
