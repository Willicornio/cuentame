import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  private url = 'http://localhost:8080';
  private socket;    

  constructor() {

  }
conectar(){

  this.socket = io(this.url);
}

votarnoti(notificacionvotar: string){

this.socket.emit('notificacionvotar', notificacionvotar);

}

}
