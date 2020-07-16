import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType, Http} from '@angular/http';
import { Libro } from '../models/libro';
import { LibroPage } from '../pages/libro/libro.page';



@Injectable({
  providedIn: 'root'
})

export class PeticionesapiService {
  private base = 'http://localhost:'; 

  private urllibro = this.base + '3000/api/libro';
  private urlescena = this.base +  '3000/api/escena';


  constructor( private http: HttpClient) { }

  public Damelibro(id: number): Observable<Libro> {
     // tslint:disable-next-line:max-line-length
    return this.http.get<Libro>(this.urllibro + '/' + id);
  }

  // public Dameescena(id: number): Observable<Escena> {
  //   return this.http.get<Escena>(this.urlescena + '/' + id);
  // }
  public publicarlibro(libro: Libro): Observable<Libro>{
    return this.http.post<Libro>(this.urllibro, libro);
  }


  // public MOodlibro(titulo: string, autor: string, resumen: string, portada: string, puntuacion: string, idAlumno: string, escenas: [], numeropag:string): Observable<Libro> {
  //   return this.http.put<Libro>(this.urllibro + '/' + titulo + '/juegoDeColeccions/' + juegoId, juego);
  // }


}
