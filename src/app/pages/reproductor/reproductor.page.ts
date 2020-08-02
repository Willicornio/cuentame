import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { map } from 'rxjs/operators';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { Frame } from 'src/app/models/frame';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  get_duration_interval: any;
  listaFondos: ImagenFondo[] = [];
  idalumno;
  idLibro;
  listaEscenas: EscenaFrames[] = [];
  listaFrames: Frame[] = [];
  listaFotos = [];
  fotoimagen: string;

  constructor(private peticionesAPI: PeticionesapiService) {

  }

  ngOnInit() {

    this.idalumno = localStorage.getItem("idAlumno");
    this.idLibro = '16';





    // var imagen = new ImagenFondo();
    // imagen.id = 0;
    // imagen.src = '/assets/imgs/1.png';
    // imagen.pos = true;
    // imagen.tipo = 1;

    // var imagen2 = new ImagenFondo();
    // imagen2.id = 1;
    // imagen2.src = '/assets/imgs/2.png';
    // imagen2.pos = false;
    // imagen2.tipo = 1;

    // var imagen3 = new ImagenFondo();
    // imagen3.id = 2;
    // imagen3.src = '/assets/imgs/3.png';
    // imagen3.pos = true;
    // imagen3.tipo = 2;
    // var imagen4 = new ImagenFondo();
    // imagen4.id = 3;
    // imagen4.src = '/assets/imgs/4.png';
    // imagen4.pos = false;
    // imagen4.tipo = 2;

    // var imagen5 = new ImagenFondo();
    // imagen5.id = 4;
    // imagen5.src = '/assets/imgs/64496.png';
    // imagen5.pos = false;
    // imagen5.tipo = 3;
    // var imagen6 = new ImagenFondo();
    // imagen6.id = 5;
    // imagen6.src = '/assets/imgs/blanpix.png';
    // imagen6.pos = false;
    // imagen6.tipo = 3;
    // var imagen7 = new ImagenFondo();
    // imagen7.id = 6;
    // imagen7.src = '/assets/imgs/fondo.png';
    // imagen7.pos = false;
    // imagen7.tipo = 3;



    // this.listaFondos.push(imagen);
    // this.listaFondos.push(imagen2);
    // this.listaFondos.push(imagen3);
    // this.listaFondos.push(imagen4);
    // this.listaFondos.push(imagen5);
    // this.listaFondos.push(imagen6);
    // this.listaFondos.push(imagen7);
    this.dameEscenas();

  }

  slideOpts = {
    speed: 10,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 200,
    loop: "false"

  };



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
  this.slides.slidePrev();




}
    }
