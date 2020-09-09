import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ResponseContentType, Http } from '@angular/http';
import { Libro } from '../models/libro';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SeleccionpersonajePageRoutingModule } from '../pages/seleccionpersonaje/seleccionpersonaje-routing.module';
import { Escena } from '../models/escena';
import { Frame } from '../models/frame';
import { EscenaFrames } from '../models/escenaFrames';
import { Alumno } from '../models/alumno';
import { juegolibro } from '../models/juegolibro';
import { Concurso } from '../models/concurso';




@Injectable({
  providedIn: 'root'
})

export class PeticionesapiService {
  private base = 'http://localhost:';

  private urllibro = this.base + '3000/api/libro';
  private urlescena = this.base + '3000/api/escenas';
  private urlalumno = this.base + '3000/api/Alumnos';
  private urlimagenes = this.base + '3000/api/imagenes';
  private urlimagenesWithLevel = this.base + '3000/api/Imagenes/libro1Pruebas';
  private urlgrupo =this.base + '3000/api/Grupos';
  private urlParaEscenaPruebas = this.base + '3000/api/escenas';
  private urlFrame = this.base + '3000/api/frames';
  private urljuegolibro = this.base + '3000/api/juegodelibro';
  private urlalumnojuego = this.base + '3000/api/alumnojuegodecuento';

  constructor(private http: HttpClient,
    private httpImagenes: Http) { }

  public Damelibro(idalumno: string, idlibro: string): Observable<Libro> {
    return this.http.get<Libro>(this.urlalumnojuego + '/' + idalumno + '/libro' + '/' + idlibro);
  }

  public Damealumno(idalumno: string) {

    return this.http.get<Alumno>(this.urlalumno + '/' + idalumno);

  }

  public Damelistalibros(idalumno: string) {

    return this.http.get<Libro[]>(this.urlalumno + '/' + idalumno + '/libro');

  }

  public Damelistalibrosclase() {

    return this.http.get<Libro[]>(this.urllibro);

  }

  public Damelistaescenas(idlibro: string) {

    return this.http.get<Escena[]>(this.urllibro + '/' + idlibro + '/escenas');

  }

  public postImage(contenedor: string, formData: FormData): Observable<any> {
    return this.http.post<any>(this.urlimagenes + '/' + contenedor + '/upload', formData);

  }

  public getImage(nameFile: string): Observable<any> {
    return this.http.get<any>(this.urlimagenesWithLevel + '/download' + nameFile);
  }

  public getImagen(nameFile: string, contenedor: string): Observable<any> {
    return this.httpImagenes.get(this.urlimagenes + '/' + contenedor + '/download/' + nameFile,
      { responseType: ResponseContentType.Blob });
  }


  public createFolder(name: any): Observable<any> {
    return this.http.post<any>(this.urlimagenes, name);

  }

  public postEscena(escena: any): Observable<any> {
    return this.http.put<any>(this.urlescena + '/' + escena.id, escena);

  }

  public postEscenaPruebas(escena: any): Observable<any> {
    return this.http.put<any>(this.urlParaEscenaPruebas, escena);

  }


  public getEscena(id): Observable<any> {
    return this.http.get<any>(this.urlParaEscenaPruebas + '/' + id);
  }


  public getFramesByEscenaId(id): Observable<any> {
    return this.http.get<any>(this.urlParaEscenaPruebas + '/' + id + '/frames');
  }

  public modificalibro(libro: Libro): Observable<any> {
    return this.http.put<any>(this.urllibro + '/' + libro.id, libro);


  }

  public dameunlibro(id): Observable<any> {
    return this.http.get<any>(this.urllibro + '/' + id);
  }



  // public Dameescena(id: number): Observable<Escena> {
  //   return this.http.get<Escena>(this.urlescena + '/' + id);
  // }
  public publicarlibro(idalumno: string, libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.urlalumnojuego + '/' + idalumno + '/Libro', libro);
  }


  public postFrame(id: string, frame: Frame): Observable<Frame> {
    return this.http.post<Frame>(this.urlParaEscenaPruebas + '/' + id + '/frames', frame);
  }


  public putEscena(id: string, escena: EscenaFrames): Observable<EscenaFrames> {
    return this.http.put<EscenaFrames>(this.urlescena + '/' + id, escena);
  }

  public putFrame(id: string, fk: string, frame: Frame): Observable<Frame> {
    return this.http.put<Frame>(this.urlParaEscenaPruebas + '/' + id + '/frames/' + fk, frame);
  }

  public dameEscenasLibro(idlibro: string): Observable<any> {
    return this.http.get<any>(this.urllibro + '/' + idlibro + '/escenas');
  }

  public postEscenaLibro(idlibro: string, escena: any): Observable<any> {
    return this.http.post<any>(this.urllibro + '/' + idlibro + '/escenas', escena);
  }

  public getGrupoalumno(idalumno): Observable<any> {
    return this.http.get<any>(this.urlalumno + '/' + idalumno + '/grupos');

  }

  public getjuegosdelibro(idgrupo): Observable<any> {
    return this.http.get<any>(this.urlgrupo + '/' + idgrupo + '/juegodelibro');

  }
  public getgrupo(idgrupo): Observable<any> {
    return this.http.get<any>(this.urlgrupo + '/' + idgrupo);
  }
  public getalumnosgrupo(idgrupo): Observable<any> {
    return this.http.get<any>(this.urlgrupo + '/' + idgrupo + '/alumnos');
  }

  public getjuedolibro(id): Observable<juegolibro> {
    return this.http.get<juegolibro>(this.urljuegolibro + '/' + id);
  }

  public getconcurso(id): Observable<Concurso> {
    return this.http.get<Concurso>(this.urljuegolibro + '/' + id + '/juegoLibroConcurso');
  }

  public getRecursoParaLibro(id): Observable<any> {
    return this.http.get<any>(this.urljuegolibro + '/' + id + '/recursosJuegoLibro');
  }

  public getAlumnoJugegosLibro(id): Observable<any> {
    return this.http.get<any>(this.urljuegolibro + '/' + id + '/alumnojuegodecuento');
  }


  
  public obtenerAlumnosJuegoLibro(id): Observable<any> {
    return this.http.get<any>(this.urljuegolibro+ '/' + id + '/alumnojuegodecuento');
  }

 
  public Damealumnojuego(id): Observable<any> {
    return this.http.get<any>(this.urlalumnojuego+ '/' + id);
  }


public getLibroAlumnoJuego(id): Observable<any> {
  return this.http.get<any>(this.urlalumnojuego+ '/' + id + '/Libro');
}

public putLibro(id, libro): Observable<any> {
  return this.http.put<any>(this.urllibro+ '/' + id, libro);
}



  
  //  MOodlibro(titulo: string, autor: string, resumen: string, portada: string, puntuacion: string, idAlumno: string, escenas: [], numeropag:string): Observable<Libro> {
  //   return this.http.put<Libro>(this.urllibro + '/' + titulo + '/juegoDeColeccions/' + juegoId, juego);
  // }


}
