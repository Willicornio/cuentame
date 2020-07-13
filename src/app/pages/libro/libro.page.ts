import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  libro: Libro;

  constructor(private router: Router) { }

  ngOnInit() {

 
   
    this.libro = new Libro();
    this.libro.portada = '/assets/imgs/portada.jpg';
    //console.log("jiji");
 

  }
  cargarportada(){

 


    }

  crearlibro(form: NgForm){
    if(form.value.titulo != null){
      this.libro.titulo == form.value.titulo;
      console.log("jiji")
      console.log(this.libro.titulo)
    }
      if(form.value.textarea != null){
        this.libro.resumen == form.value.textarea;
        console.log(this.libro.resumen)
      }
   
    } 


    }
 




