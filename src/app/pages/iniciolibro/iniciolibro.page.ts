import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Router } from "@angular/router";
import {PeticionesapiService} from '../../services/peticionesapi.service';

@Component({
  selector: 'app-iniciolibro',
  templateUrl: './iniciolibro.page.html',
  styleUrls: ['./iniciolibro.page.scss'],
})
export class IniciolibroPage implements OnInit {

  idAlumno = 'holaa';
  listalibros: Libro[] = [];
  constructor( private router: Router, private peticionesAPI: PeticionesapiService) { }

  ngOnInit() {
  
    this.getlibros();
    
    // var libro1 = new Libro();
    // libro1.portada = '/assets/imgs/buena.jpg';
    // libro1.titulo = 'titullibre1';

    // var libro2 = new Libro();
    // libro2.portada = '/assets/imgs/1/png';
    // libro2.titulo = 'titullibre2';

    // var libro3 = new Libro();
    // libro3.portada = '/assets/imgs/logo1.jpg';
    // libro3.titulo = 'titullibre3';

    // var libro4 = new Libro();
    // libro4.portada = '/assets/imgs/2.png';
    // libro4.titulo = 'titullibre4';

    // var libro5 = new Libro();
    // libro5.portada = '/assets/imgs/3.png';
    // libro5.titulo = 'titullibre5';

    // this.listalibros.push(libro1);
    // this.listalibros.push(libro1);
    // this.listalibros.push(libro3);
    // this.listalibros.push(libro4);
    // this.listalibros.push(libro5);
    // this.listalibros.push(libro1);

    var idalumno= localStorage.getItem("idAlumno");
  
  
    
  }

  getlibros(){
    
    var idalumno= localStorage.getItem("idAlumno");

    this.peticionesAPI.Damelistalibros(idalumno)
    .subscribe(res => {
     
      res.forEach(element => {

        this.listalibros.push(element);
      })

    
    });
  

   }


  iralibro(){

    

    this.router.navigate(['/libro'])
  }

  iracanvas(){

    this.router.navigate(['/libro'])
  }


  continuarLibro(libro){
    var id = libro.id;
    this.router.navigate(['/listaescenas' + "/" + id])



  }



}
