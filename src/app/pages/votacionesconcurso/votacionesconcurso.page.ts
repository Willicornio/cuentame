import { Component, OnInit } from '@angular/core';
import { Concurso } from 'src/app/models/concurso';
import { Router } from "@angular/router";
import { PeticionesapiService } from '../../services/peticionesapi.service';

@Component({
  selector: 'app-votacionesconcurso',
  templateUrl: './votacionesconcurso.page.html',
  styleUrls: ['./votacionesconcurso.page.scss'],
})
export class VotacionesconcursoPage implements OnInit {

  constructor(private router: Router, private peticionesAPI: PeticionesapiService) { }
  idconcurso;
  concurso: any;
  listainscritos: [];
  listashow: [];
  ngOnInit() {

    this.obtenerconcurso();

  }




  public obtenerconcurso() {
    this.idconcurso = localStorage.getItem("idconcurso");

    this.peticionesAPI.getconcurso(this.idconcurso)

      .subscribe((res) => {

        
        console.log(res);

        this.concurso = res;


        this.concurso.forEach(cosa => {
          this.idconcurso = cosa.id;
          this.listainscritos = cosa.listaLibrosParticipantes;

        })
        this.crearlista();
      }, (err) => {


      })

  }


  public crearlista(){


    this.listainscritos.forEach(libroi => {
      var idlibro = libroi;
      this.peticionesAPI.dameunlibro(this.idconcurso)

      .subscribe((res) => {
        this.listashow.push();
        console.log(this.listashow);

    }) 
   }, (err) => {


    })






  }










}
