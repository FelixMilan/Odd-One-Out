import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { RandomisorService } from './randomisor.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private playerService: PlayerService, 
    private randomisorService: RandomisorService) { }
}
