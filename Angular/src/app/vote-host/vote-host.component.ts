import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-vote-host',
  templateUrl: './vote-host.component.html',
  styleUrls: ['./vote-host.component.css']
})
export class VoteHostComponent implements OnInit {

  defaultCeleb: string='';
  drawings: any[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.defaultCeleb = this.serverService.getGameState().defaultCeleb;
    this.drawings = this.serverService.getGameState().drawings;
  }

}

