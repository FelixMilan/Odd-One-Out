import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class RandomisorService {

  private url = 'api/namePool';
  namePool: Name[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getNamePool(): void {
    let namePool = this.http.get<Name[]>(this.url);
    namePool.subscribe(namePool => this.namePool = namePool);
  }

  getRandomNameFromPool(): Name {
    let chosenIndex: number = this.getRandomInt(0, this.namePool.length);
    return this.namePool[chosenIndex];
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(private http: HttpClient) { }
}
