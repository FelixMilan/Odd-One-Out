import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  players: any[] = [];

  constructor(public serverService: ServerService) { }

  checkInterval: any=null;

  ngOnInit(): void {
    this.checkInterval = setInterval(() => {
      console.log(this.serverService.getGameState())
       this.players = this.serverService.getGameState().players.map((player: any) => {
         return player?.name;
       });
    }, 500);
  }

  ngOnDestroy(): void {

    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }

}
