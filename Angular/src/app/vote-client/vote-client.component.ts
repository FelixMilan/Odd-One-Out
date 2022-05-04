import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-client',
  templateUrl: './vote-client.component.html',
  styleUrls: ['./vote-client.component.css']
})
export class VoteClientComponent implements OnInit {
  title = 'vote-client';
  constructor() { }

  ngOnInit(): void {
  }

}
