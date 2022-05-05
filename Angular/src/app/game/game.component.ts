import { Component, OnInit } from '@angular/core';
import { IOService } from '../IO.service';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.connect();
  }
}
