import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { map } from 'rxjs/operators';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { Frame } from 'src/app/models/frame';
import { Input, EventEmitter ,Output} from "@angular/core";
import { Libro } from 'src/app/models/libro';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  @Input() rating: number ;
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
  duracion;

  constructor(private peticionesAPI: PeticionesapiService) {

  }

  ngOnInit() {
    this.rate = 0;
    this.idalumno = localStorage.getItem("idAlumno");
    this.idLibro = '21';

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
    this.puntuarlibro();
  }

  damelibro() {
    var idalumno = localStorage.getItem("idAlumno");

    this.peticionesAPI.Damelibro(idalumno, this.idLibro)
      .subscribe(res => {
        console.log(res);
        this.libro = res;
        this.listapuntuacion = res.puntuacion;
       
   
      });


  }
  
puntuarlibro(){
this.listapuntuacion.push(this.rate);
this.listapuntuacion = this.libro.puntuacion;

this.peticionesAPI.modificalibro(this.libro)
.subscribe((res) => {
   console.log(res)


}, (err) => { console.log(err); }
);


}















  dameEscenas() {

    this.peticionesAPI.dameEscenasLibro(this.idLibro)
      .subscribe(res => {
        console.log(res);

        res.forEach(element => {
          this.listaEscenas.push(element);
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

    var contenedor = 'blobs';
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

  var time = 1000;
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
