import { Component, OnInit } from '@angular/core';
import { Concurso } from 'src/app/models/concurso';
import { Router } from "@angular/router";
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { Libro } from 'src/app/models/libro';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-votacionesconcurso',
  templateUrl: './votacionesconcurso.page.html',
  styleUrls: ['./votacionesconcurso.page.scss'],
})
export class VotacionesconcursoPage implements OnInit {

  constructor(private dataservice: DataService ,private router: Router, private peticionesAPI: PeticionesapiService) { }
  idconcurso;
  concurso: any;
  listainscritos: [];
  listashow: Libro [];
  id;
  cuento: any;
  ngOnInit() {

    this.obtenerconcurso();

  }




  public obtenerconcurso(){
    this.id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getconcurso(this.id)

    .subscribe((res) => {
      var data;
      this.concurso = res;
      console.log(res);
      console.log(res);

      this.concurso.forEach(cosa => {
      this.idconcurso =cosa.id;
      this.listainscritos = cosa.listaLibrosParticipantes;
       
    })
    this.crearlista();
    this.dataservice.setdataconcurso(500, this.concurso);
    }, (err) => {
      
        })



  }


  public crearlista(){


    this.listainscritos.forEach(libroi => {
      var idlibro = libroi;
      this.listashow = [];
      this.peticionesAPI.dameunlibro(idlibro)
 
      .subscribe((res) => {
       
        this.cuento = res;
     
        this.listashow.push(this.cuento);

        console.log(this.listashow);

    }) 
   }, (err) => {


    })






  }


  irareproductor(id)
{
  localStorage.setItem("idLibro", id);
  this.router.navigate(['/reproductor']);



}








}
