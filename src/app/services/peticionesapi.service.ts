import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ResponseContentType, Http} from '@angular/http';
import { Libro } from '../models/libro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SeleccionpersonajePageRoutingModule } from '../pages/seleccionpersonaje/seleccionpersonaje-routing.module';
import { Escena } from '../models/escena';



@Injectable({
  providedIn: 'root'
})

export class PeticionesapiService {
  private base = 'http://localhost:'; 

  private urllibro = this.base + '3000/api/libro';
  private urlescena = this.base +  '3000/api/escena';
  private urlalumno = this.base + '3000/api/Alumnos';
 

  constructor( private http: HttpClient) { }

  public Damelibro( idalumno: string, idlibro: string): Observable<Libro> {
     // tslint:disable-next-line:max-line-length
    return this.http.get<Libro>(this.urlalumno + '/' + idalumno + '/libro'+ '/' +   idlibro);
  }

  public Damelistalibros(idalumno: string){

    return this.http.get<Libro[]>(this.urlalumno + '/' + idalumno + '/libro');

  }

  public Damelistaescenas(idlibro: string){

    return this.http.get<Escena[]>(this.urllibro + '/' + idlibro + '/escenas');

  }









  // public Dameescena(id: number): Observable<Escena> {
  //   return this.http.get<Escena>(this.urlescena + '/' + id);
  // }
  public publicarlibro(idalumno: string, libro: Libro): Observable<Libro>{
    return this.http.post<Libro>(this.urlalumno + '/' + idalumno + '/libro', libro);
  }


  // public MOodlibro(titulo: string, autor: string, resumen: string, portada: string, puntuacion: string, idAlumno: string, escenas: [], numeropag:string): Observable<Libro> {
  //   return this.http.put<Libro>(this.urllibro + '/' + titulo + '/juegoDeColeccions/' + juegoId, juego);
  // }


}
