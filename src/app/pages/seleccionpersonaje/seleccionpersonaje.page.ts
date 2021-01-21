import { Component, OnInit } from '@angular/core';
import { ImagenFondo } from '../../models/imagenFondo';
import { PersonajeFrame } from '../../models/personajeFrame';
import {DataService} from '../../services/data.service';
import { ImagenRecurso } from '../../models/imagenRecurso';
import { Router, Data } from "@angular/router";
import { Personaje } from 'src/app/models/personaje';
import { element } from 'protractor';

@Component({
  selector: 'app-seleccionpersonaje',
  templateUrl: './seleccionpersonaje.page.html',
  styleUrls: ['./seleccionpersonaje.page.scss'],
})
export class SeleccionpersonajePage implements OnInit {

  srcq;
  muestraEspeciales: any = false;
  alumnoJuegoCuento: any;


 fotosBackend: ImagenRecurso [] = [];
 listaFotosPersonaje: ImagenRecurso [] = [];
 listaFotosPersonajeEspeciales: ImagenRecurso [] = [];

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
 
     
 
             if(elemento.tipo == "personaje")
             {
             
                if(elemento.especial == false)
                {
             
             var foto = new ImagenRecurso();
             foto.nombre = elemento.nombre;
             var nombreToShow = foto.nombre.split('.')[0];
             foto.nombreToShow = nombreToShow;
             foto.id = elemento.id;
             foto.especial = elemento.especial;
             foto.tipo = elemento.tipo;
             foto.url = elemento.url;
             this.listaFotosPersonaje.push(foto);
             }
 
             if(elemento.especial == true && this.muestraEspeciales == true)
             {
                var foto = new ImagenRecurso();
                foto.nombre = elemento.nombre;
                var nombreToShow = foto.nombre.split('.')[0];
                foto.nombreToShow = nombreToShow;
                foto.id = elemento.id;
                foto.especial = elemento.especial;
                foto.tipo = elemento.tipo;
                foto.url = elemento.url;
                this.listaFotosPersonajeEspeciales.push(foto);
 
                
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
       
     
    





  seleccionarpersonaje(foto) {

    var img3 = new Image();
    img3.src = foto.url;
    // img3.src = '../../assets/imgs/fondo1.jpg';
    img3.width = 900;
    img3.height = 900;
    console.log(img3.src);
    localStorage.setItem("fotoPersonaje", "tengo");
    localStorage.setItem("idPersonaje", "tengo");
    this.dataService.setDataRecursos(600, foto.nombre);
    this.dataService.setDataRecursos(601, foto.url);
    this.dataService.setDataRecursos(602, foto.id);
    var idEscena = localStorage.getItem("idEscena");
    this.router.navigateByUrl("/cuentocanvas/" + idEscena);


  
  }

  salir()
  {
     this.router.navigate(["login"]);
  }

}
