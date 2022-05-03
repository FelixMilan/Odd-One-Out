import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url: string = 'api/players';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.url}/${player.id}`, player, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
