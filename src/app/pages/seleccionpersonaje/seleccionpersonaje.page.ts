import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { PersonajeFrame } from '../../models/personajeFrame';

import { Router } from "@angular/router";
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-seleccionpersonaje',
  templateUrl: './seleccionpersonaje.page.html',
  styleUrls: ['./seleccionpersonaje.page.scss'],
})
export class SeleccionpersonajePage implements OnInit {

  srcq;

  listapersonajes: PersonajeFrame[] = [];
  listapersonajesDerecha: PersonajeFrame[] = [];
  listapersonajesIzquierda: PersonajeFrame[] = [];

  listaanimalesDerecha: PersonajeFrame[] = [];
  listaanimalesIzquierda: PersonajeFrame[] = [];

  listamosntruosDerecha: PersonajeFrame[] = [];
  listamosntruosIzquiera: PersonajeFrame[] = [];

  
  // //listaFondos: ImagenFondo [] = [];
  // listaFondosDerecha: ImagenFondo [] = [];
  // listaFondosIzquierda: ImagenFondo [] = [];
  // listaFondosDerechatipo1: ImagenFondo [] = [];
  // listaFondosIzquierdatipo1: ImagenFondo [] = [];

  constructor(private router: Router) { }

  ngOnInit() {


    var personaje = new PersonajeFrame();
    personaje.id = 0;
    personaje.foto = '/assets/imgs/buena.jpg';
    personaje.tipo = 1;

    var imagen2 = new PersonajeFrame();
    imagen2.id = 1;
    imagen2.foto = '/assets/imgs/malo.jpg';
    imagen2.tipo = 1;

    var imagen3 = new PersonajeFrame();
    imagen3.id = 1;
    imagen3.foto = '/assets/imgs/mario.png';
    imagen3.tipo = 1;

    var imagen4 = new PersonajeFrame();
    imagen4.id = 3;
    imagen4.foto = '/assets/imgs/blanpix.png';

    imagen4.tipo = 2;

    var imagen5 = new PersonajeFrame();
    imagen5.id = 4;
    imagen5.foto = '/assets/imgs/vulpix.png';
    imagen5.tipo = 2;

    var imagen6 = new PersonajeFrame();
    imagen6.id = 5;
    imagen6.foto = '/assets/imgs/vape.png';
    imagen6.tipo = 2;

    var imagen7 = new PersonajeFrame();
    imagen7.id = 6;
    imagen7.foto = '/assets/imgs/evee.png';
    imagen7.tipo = 2;

    var imagen8 = new PersonajeFrame();
    imagen8.id = 7;
    imagen8.foto = '/assets/imgs/grupo.png';
    imagen8.tipo = 3;

    this.listapersonajes.push(personaje);
    this.listapersonajes.push(imagen2);
    this.listapersonajes.push(imagen3);
    this.listapersonajes.push(imagen4);
    this.listapersonajes.push(imagen5);
    this.listapersonajes.push(imagen6);
    this.listapersonajes.push(imagen7);
    this.listapersonajes.push(imagen8);


    //ahora vamos a generar las lista derecha y la lista izquierda:

    this.generarListapersonajes();
    this.generarListapersonajes();
    this.generarListaanimales();


  }

  generarListamonstruos() {
    this.listapersonajes.forEach(personaje => {
      if (personaje.id % 2 == 0 && personaje.tipo == 3) {
        this.listamosntruosDerecha.push(personaje);
      }
      else if (personaje.id % 2 != 0 && personaje.tipo == 3) {
        this.listamosntruosIzquiera.push(personaje);
      }
    })

  }


  generarListaanimales() {
    this.listapersonajes.forEach(personaje => {
      if (personaje.id % 2 == 0 && personaje.tipo == 2) {
        this.listaanimalesDerecha.push(personaje);
      }
      else if (personaje.id % 2 != 0 && personaje.tipo == 2) {
        this.listaanimalesIzquierda.push(personaje);
      }
    })

  }

  generarListapersonajes() {
    this.listapersonajes.forEach(personaje => {
      if (personaje.id % 2 == 0 && personaje.tipo == 1) {
        this.listapersonajesDerecha.push(personaje);
      }
      else if (personaje.id % 2 != 0 && personaje.tipo == 1) {
        this.listapersonajesIzquierda.push(personaje);
      }
    })

  }




  muestramext = false;
  muestrame = false;
  muestramemons = false;

  muestrainte() {
    this.muestramext = false;
    this.muestrame = true;
    this.muestramemons = false;

  }
  oculta() {

    this.muestrame = false;
    this.muestramext = false;
    this.muestramemons = false;
  }

  muestramemonst() {
    this.muestramemons = true;
    this.muestrame = false;
    this.muestramext = false;
  }

  muestraexte() {

    this.muestrame = false;
    this.muestramext = true;
    this.muestramemons = false;

  }


  seleccionarpersonaje(personaje) {

    var img3 = new Image();
    img3.src = personaje.foto;
    // img3.src = '../../assets/imgs/fondo1.jpg';
    img3.width = 900;
    img3.height = 900;
    console.log(img3.src);
    localStorage.setItem("fotoPersonaje", personaje.foto);
    localStorage.setItem("idPersonaje", personaje.id);
    var idEscena = localStorage.getItem("idEscena");
    this.router.navigateByUrl("/cuentocanvas/" + idEscena);




  }



}
