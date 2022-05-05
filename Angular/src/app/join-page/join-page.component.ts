import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css']
})
export class JoinPageComponent implements OnInit {

  constructor(private lobbyService: LobbyService) { }

  ngOnInit(): void {
  }

}
