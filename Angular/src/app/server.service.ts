import { Injectable } from '@angular/core';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket = io();

  constructor() { }
}
