import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-writing-screen-host',
  templateUrl: './writing-screen-host.component.html',
  styleUrls: ['./writing-screen-host.component.css']
})
export class WritingScreenHostComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  checkInterval: any=null;
  lobbyCode?: string;
  timeLeft?: number;

  ngOnInit(): void {
    this.lobbyCode = this.serverService.getLobbyCode();

    this.checkInterval = setInterval(() => {
      this.timeLeft = this.serverService.getGameState().timeLeft;
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }

}
