import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { juegolibro } from 'src/app/models/juegolibro';
import { Alumno } from 'src/app/models/alumno';
import { Concurso } from 'src/app/models/concurso';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import { ThrowStmt } from '@angular/compiler';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-resultadosconcurso',
  templateUrl: './resultadosconcurso.page.html',
  styleUrls: ['./resultadosconcurso.page.scss'],
})
export class ResultadosconcursoPage implements OnInit {
  toptres: Libro[];
  concurso: any;
  listainscripcipnes: [];
  listalibros: Libro[];
  muestralista: Libro[];
  primerpuesto;
  segundopuesto;
  tercerpuesto;
  libro1;
  libro2;
  libro3;

  constructor(private router: Router, private peticionesAPI: PeticionesapiService, public alertController: AlertController) { }

  ngOnInit() {
    this.obtenerconcurso();
  }





  public obtenerconcurso() {
    var id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getconcurso(id)

      .subscribe((res) => {
        this.concurso = res;
        console.log(res);


        this.concurso.forEach(cosa => {

          this.listainscripcipnes = cosa.listaLibrosParticipantes;
          this.primerpuesto = cosa.primerpuesto;
          this.segundopuesto = cosa.segundopuesto;
          this.tercerpuesto = cosa.tercerpuesto;

        })

        this.obtenerlibros();
      }, (err) => {


      })

  }


  obtenerlibros() {
    var i = 0;
    this.listalibros = [];
    this.libro1 = new Libro();
    this.libro2 = new Libro();
    this.libro3 =  new Libro();

    this.listainscripcipnes.forEach(cosa => {

      this.peticionesAPI.dameunlibro(cosa)
        .subscribe((res) => {
          console.log(res);
          this.listalibros.push(res);

          i = i + 1;
          if( res.titulo == this.primerpuesto){
            this.libro1 = res;

          }
          if( res.titulo == this.segundopuesto){
            this.libro2 = res;

          }
          if( res.titulo == this.tercerpuesto){
            this.libro3 = res;

          }

          if (i == this.listainscripcipnes.length) {
            this.ordenarlibros();

          }


        }, (err) => {
          console.log(err)

        })

    });




  }

  ordenarlibros() {

    this.listalibros.sort((a, b) => a.criteriototal - b.criteriototal);

    // this.listalibros.sort((a, b) =>
    // a.criteriototal === b.criteriototal ? -1 : 0);
    this.muestralista = [];
    console.log(this.listalibros);

    this.muestralista = this.listalibros;
    this.muestralista.reverse();
    console.log(this.muestralista);

  }



  


}