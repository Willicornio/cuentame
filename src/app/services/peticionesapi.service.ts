import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ResponseContentType, Http} from '@angular/http';
import { Libro } from '../models/libro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SeleccionpersonajePageRoutingModule } from '../pages/seleccionpersonaje/seleccionpersonaje-routing.module';
import { Escena } from '../models/escena';
import { Frame } from '../models/frame';
import { EscenaFrames } from '../models/escenaFrames';
import { Alumno } from '../models/alumno';




@Injectable({
  providedIn: 'root'
})

export class PeticionesapiService {
  private base = 'http://localhost:'; 

  private urllibro = this.base + '3000/api/libro';
  private urlescena = this.base +  '3000/api/escenas';
  private urlalumno = this.base + '3000/api/Alumnos';
  private urlimagenesWithLevel = this.base + '3000/api/Imagenes/libro1Pruebas';
  private urlimagenes = this.base + '3000/api/imagenes';


  private urlParaEscenaPruebas = this.base + '3000/api/escenas';


  private urlFrame = this.base + '3000/api/frames'
 

  constructor( private http: HttpClient) { }

  public Damelibro( idalumno: string, idlibro: string): Observable<Libro> {
     // tslint:disable-next-line:max-line-length
    return this.http.get<Libro>(this.urlalumno + '/' + idalumno + '/libro'+ '/' +   idlibro);
  }

  public Damealumno(idalumno: string){

    return this.http.get<Alumno>(this.urlalumno + '/' + idalumno);

  }

  public Damelistalibros(idalumno: string){

    return this.http.get<Libro[]>(this.urlalumno + '/' + idalumno + '/libro');

  }
 
  public Damelistalibrosclase(){

    return this.http.get<Libro[]>(this.urllibro);

  }
  
  public Damelistaescenas(idlibro: string){

    return this.http.get<Escena[]>(this.urllibro + '/' + idlibro + '/escenas');

  }

  public postImage(formData: FormData): Observable<any>{
    return this.http.post<any>(this.urlimagenesWithLevel + '/upload', formData);

  }

  public getImage(nameFile : string): Observable<any>{
    return this.http.get<any>(this.urlimagenesWithLevel + '/download'+ nameFile);

  }

  public createFolder(name : any): Observable<any>{
    return this.http.post<any>(this.urlimagenes, name);

  }

  public postEscena(escena : any): Observable<any>{
    return this.http.put<any>(this.urlescena + '/' + escena.id , escena);

  }

  public postEscenaPruebas(escena : any): Observable<any>{
    return this.http.put<any>(this.urlParaEscenaPruebas, escena);

  }

  public getEscena(id): Observable<any>{
    return this.http.get<any>(this.urlParaEscenaPruebas + '/' + id);
  }


  public getFramesByEscenaId(id): Observable<any>{
    return this.http.get<any>(this.urlParaEscenaPruebas + '/' + id + '/frames');
  }


  // public Dameescena(id: number): Observable<Escena> {
  //   return this.http.get<Escena>(this.urlescena + '/' + id);
  // }
  public publicarlibro(idalumno: string, libro: Libro): Observable<Libro>{
    return this.http.post<Libro>(this.urlalumno + '/' + idalumno + '/libro', libro);
  }

  
  public postFrame(id: string, frame: Frame): Observable<Frame>{
    return this.http.post<Frame>(this.urlParaEscenaPruebas + '/' + id + '/frames', frame);
  }

 
  public putEscena(id: string, escena: EscenaFrames): Observable<EscenaFrames>{
    return this.http.put<EscenaFrames>(this.urlescena + '/' + id, escena);
  }

  public putFrame(id: string,fk : string, frame: Frame): Observable<Frame>{
    return this.http.put<Frame>(this.urlParaEscenaPruebas + '/' + id +'/frames/' + fk, frame);
  }

  // public MOodlibro(titulo: string, autor: string, resumen: string, portada: string, puntuacion: string, idAlumno: string, escenas: [], numeropag:string): Observable<Libro> {
  //   return this.http.put<Libro>(this.urllibro + '/' + titulo + '/juegoDeColeccions/' + juegoId, juego);
  // }


}
