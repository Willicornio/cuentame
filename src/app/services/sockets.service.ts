import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

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

recibirprueba(): any{
  
  return Observable.create((observer) => {
    this.socket.on('notificacionvotardash', (notificacionvotardash) => {
        console.log ('ha llegado la notificación de votar llega notificacion');
        observer.next(notificacionvotardash);
    });
});
  }


}
