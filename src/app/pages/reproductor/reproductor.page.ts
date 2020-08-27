import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { map } from 'rxjs/operators';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { Frame } from 'src/app/models/frame';
import { Input, EventEmitter, Output } from "@angular/core";
import { Libro } from 'src/app/models/libro';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  @Input() rating: number;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;
  @ViewChild(IonSlides) slides: IonSlides;

  get_duration_interval: any;
  listaFondos: ImagenFondo[] = [];
  idalumno;
  idLibro;
  listaEscenas: EscenaFrames[] = [];
  listaFrames: Frame[] = [];
  listaFotos = [];
  fotoimagen: string;
  rate: any;
  libro: Libro;
  puntuacion: any;
  listapuntuacion = [];
  listavotantes = [];
  duracion;
  tiempo;
  votante = false;
  constructor(private peticionesAPI: PeticionesapiService) {

  }

  ngOnInit() {
    this.rate = 0;
    this.idalumno = localStorage.getItem("idAlumno");
    this.idLibro = localStorage.getItem("idLibro");

    this.dameEscenas();
    this.damelibro();

  }

  slideOpts = {
    speed: 10,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 200,
    loop: "false"

  };

  onRate(rate) {
    console.log(rate)
    this.rate = rate;


    ////////if
    this.puntuarlibro();
  }

  damelibro() {
    var idalumno = localStorage.getItem("idAlumno");


    this.peticionesAPI.Damelibro(idalumno, this.idLibro)
      .subscribe(res => {
        console.log(res);
        this.libro = res;
        this.listapuntuacion = res.puntuacion;
        this.listavotantes = res.listavotantes;

      });


  }

  puntuarlibro() {




    if( this.listavotantes.length > 0){
    this.listavotantes.forEach(element => {

      if (element == this.idalumno) {
        this.votante = true
      }

    })
  }



    if (this.votante == false)
   {

      this.listapuntuacion.push(this.rate);
      this.listapuntuacion = this.libro.puntuacion;
      this.listavotantes.push(this.idalumno);

      this.peticionesAPI.modificalibro(this.libro)
        .subscribe((res) => {
          console.log(res)


        }, (err) => { console.log(err); }
        );
    }

    else if (this.votante == true) {

      console.log("Ya has votado este libro niggi");


    }

  }















  dameEscenas() {

    this.peticionesAPI.dameEscenasLibro(this.idLibro)
      .subscribe(res => {
        console.log(res);

        res.forEach(element => {
          this.listaEscenas.push(element);
          this.tiempo = element.duracionFrame;
        });
        this.dameFrames();
      });


  }


  dameFrames() {

    this.listaEscenas.forEach(element => {
      var id = element.id;

      this.peticionesAPI.getFramesByEscenaId(id)
        .subscribe(res => {
          var lista = [];
          console.log(res);

          res.forEach(element => {
            lista.push(element);
          });
          this.obtenerFrames(lista);
        });


    });

  }
  obtenerFrames(lista) {

    /////////////////cambiar var contenedor///////////////////////////
    var contenedor = this.libro.titulo;
    lista.forEach(element => {

      this.listaFondos.push(element.portadaFrame);


      this.peticionesAPI.getImagen(element.portadaFrame, contenedor)
        .subscribe((res) => {
          const blob = new Blob([res.blob()], { type: 'image/png' });

          const reader = new FileReader();
          reader.addEventListener('load', () => {

            this.fotoimagen = reader.result.toString();
            this.listaFotos.push(this.fotoimagen);


          }, false);

          if (blob) {
            reader.readAsDataURL(blob);
          }





        });
    });

  }







  startAutoplay() {

    var time = 0;
    time = 1000 * this.tiempo;
    this.get_duration_interval = setInterval(() => {
      this.slides.slideNext()
    }, time);


  }
  slideChanged() {

  }
  stopAutoplay() {
    if (this.get_duration_interval) {
      clearInterval(this.get_duration_interval);

    }
  }

  slidePrev() {
    this.slides.slidePrev();

  }
  slideNext() {
    this.slides.slideNext();




  }
}
