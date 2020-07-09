import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { Router } from "@angular/router";
@Component({
  selector: 'app-cuentofondos',
  templateUrl: './cuentofondos.page.html',
  styleUrls: ['./cuentofondos.page.scss'],
})
export class CuentofondosPage implements OnInit {
  srcq;
  
  listaFondos: ImagenFondo [] = [];
  listaFondosDerecha: ImagenFondo [] = [];
  listaFondosIzquierda: ImagenFondo [] = [];
  listaFondosDerechatipo1: ImagenFondo [] = [];
  listaFondosIzquierdatipo1: ImagenFondo [] = [];

  constructor(private router: Router) { }

  ngOnInit() {
 

      var imagen = new ImagenFondo();
      imagen.id = 0;
      imagen.src = '/assets/imgs/1.png';
      imagen.pos = true;
      imagen.tipo = 1;

      var imagen2 = new ImagenFondo();
      imagen2.id = 1;
      imagen2.src = '/assets/imgs/2.png';
      imagen2.pos = false;
      imagen2.tipo = 1;

      var imagen3 = new ImagenFondo();
      imagen3.id = 2;
      imagen3.src = '/assets/imgs/3.png';
      imagen3.pos = true;
      imagen3.tipo = 2;
      var imagen4 = new ImagenFondo();
      imagen4.id = 3;
      imagen4.src = '/assets/imgs/4.png';
      imagen4.pos = false;
      imagen4.tipo = 2;

      var imagen5 = new ImagenFondo();
      imagen5.id = 4;
      imagen5.src = '/assets/imgs/4.png';
      imagen5.pos = false;
      imagen5.tipo = 3;
      var imagen6 = new ImagenFondo();
      imagen6.id = 5;
      imagen6.src = '/assets/imgs/4.png';
      imagen6.pos = false;
      imagen6.tipo = 3;
      var imagen7 = new ImagenFondo();
      imagen7.id = 6;
      imagen7.src = '/assets/imgs/4.png';
      imagen7.pos = false;
      imagen7.tipo = 3;

      var imagen8 = new ImagenFondo();
      imagen8.id = 7;
      imagen8.src = '/assets/imgs/4.png';
      imagen8.pos = false;
      imagen8.tipo = 3;

      this.listaFondos.push(imagen);
      this.listaFondos.push(imagen2);
      this.listaFondos.push(imagen3);
      this.listaFondos.push(imagen4);
      this.listaFondos.push(imagen5);
      this.listaFondos.push(imagen6);
      this.listaFondos.push(imagen7);
      this.listaFondos.push(imagen8);

     
      //ahora vamos a generar las lista derecha y la lista izquierda:

      this.generarListaFondos();
      this.generarListaFondostipo1();
      
    }
      
    
    generarListaFondostipo1()
    {
       this.listaFondos.forEach( fondo => {
          if(fondo.id % 2 == 0 && fondo.tipo == 1)
          {
             this.listaFondosIzquierdatipo1.push(fondo);
          }
          else if (fondo.id % 2 != 0 && fondo.tipo == 1)
          {
             this.listaFondosDerechatipo1.push(fondo);
          }
       })
 
    }
     

   
   
   generarListaFondos()
   {
      this.listaFondos.forEach( fondo => {
         if(fondo.id % 2 == 0)
         {
            this.listaFondosIzquierda.push(fondo);
         }
         else if (fondo.id % 2 != 0)
         {
            this.listaFondosDerecha.push(fondo);
         }
      })

   }
 
 muestramext = false;
  muestrame = false;
  muestrainte() {
   this.muestramext = false;
     this.muestrame = true;

   }
     oculta(){

        this.muestrame = false;
        this.muestramext = false;
     }

   

     muestraexte(){

      this.muestrame = false;
      this.muestramext = true;

     }


  seleccionarfondo(src){
         
    var img3 = new Image();
    img3.src = src;
    // img3.src = '../../assets/imgs/fondo1.jpg';
    img3.width = 900;
    img3.height = 900; 
   console.log(img3.src);
   this.router.navigateByUrl("");
   localStorage.setItem("src", src);  


       
    }



}
