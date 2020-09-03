import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { Router } from "@angular/router";
import {DataService} from '../../services/data.service';
import { ImagenRecurso } from '../../models/imagenRecurso';
import { element } from 'protractor';



@Component({
  selector: 'app-cuentofondos',
  templateUrl: './cuentofondos.page.html',
  styleUrls: ['./cuentofondos.page.scss'],
})
export class CuentofondosPage implements OnInit {
  srcq;
  
   muestraEspeciales: any = false;
   alumnoJuegoCuento: any;


  fotosBackend: ImagenRecurso [] = [];
  listaFotosFondos: ImagenRecurso [] = [];
  listaFotosFondosEspeciales: ImagenRecurso [] = [];

  constructor(private router: Router, private dataService: DataService) { }



  async ionViewWillEnter() {


   this.alumnoJuegoCuento = this.dataService.getDataRecursos(1000);
   if(this.alumnoJuegoCuento.nivel2 == true)
  {
   this.muestraEspeciales = true;
  }

  else   if(this.alumnoJuegoCuento.nivel2 == false)
  {
   this.muestraEspeciales = false;
  }


   this.fotosBackend = this.dataService.getDataRecursos(0);

   this.fotosBackend.forEach(elemento => {



            if(elemento.tipo == "fondo")
            {
            
               if(elemento.especial == false)
               {
            
            var foto = new ImagenRecurso();
            foto.nombre = elemento.nombre;
            foto.id = elemento.id;
            foto.especial = elemento.especial;
            foto.tipo = elemento.tipo;
            foto.url = elemento.url;
            this.listaFotosFondos.push(foto);
            }

            if(elemento.especial == true && this.muestraEspeciales == true)
            {
               var foto = new ImagenRecurso();
               foto.nombre = elemento.nombre;
               foto.id = elemento.id;
               foto.especial = elemento.especial;
               foto.tipo = elemento.tipo;
               foto.url = elemento.url;
               this.listaFotosFondosEspeciales.push(foto);

               
            }
         }

   });


  }





  ngOnInit() {
 
   var i = localStorage.getItem("idService");

   var escenaFrame  = this.dataService.getData(i);
   console.log("Estamos en los fondos");

   console.log(escenaFrame);

      
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


  seleccionarfondo(foto: ImagenRecurso){
         
    var img3 = new Image();
    img3.src = foto.url;
    // img3.src = '../../assets/imgs/fondo1.jpg';
    img3.width = 900;
    img3.height = 900; 
   console.log(img3.src);
   localStorage.setItem("src", "tengo");  
   this.dataService.setDataRecursos(500, foto.nombre);
   this.dataService.setDataRecursos(501, foto.url);
   var idEscena = localStorage.getItem("idEscena");
   this.router.navigateByUrl("/cuentocanvas/" + idEscena);
         
    }



}
