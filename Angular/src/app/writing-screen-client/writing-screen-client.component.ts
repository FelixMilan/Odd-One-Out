import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-writing-screen-client',
  templateUrl: './writing-screen-client.component.html',
  styleUrls: ['./writing-screen-client.component.css']
})
export class WritingScreenClientComponent implements OnInit {

  celebName: string='';

  setCelebName(e:any): void {
    this.celebName = (e.target?.value ?? '').toUpperCase()
  }

  inputCeleb(): void{
    this.serverService.inputCeleb(this.celebName);
  }

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

}
