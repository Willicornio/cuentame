import { Component, OnInit } from '@angular/core';
import { Concurso } from 'src/app/models/concurso';
import { Router } from "@angular/router";
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { Libro } from 'src/app/models/libro';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-votacionesconcurso',
  templateUrl: './votacionesconcurso.page.html',
  styleUrls: ['./votacionesconcurso.page.scss'],
})
export class VotacionesconcursoPage implements OnInit {

  constructor(private dataservice: DataService, private router: Router, private peticionesAPI: PeticionesapiService) { }
  idconcurso;
  concurso: any;
  listainscritos: [];
  listashow: Libro[];
  id;
  cuento: any;
  ngOnInit() {

    this.obtenerconcurso();
    this.obtenerpuntuacionactual();

  }




  public obtenerconcurso() {
    this.id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getconcurso(this.id)

      .subscribe((res) => {
        var data;
        this.concurso = res;
        console.log(res);
        console.log(res);

        this.concurso.forEach(cosa => {
          this.idconcurso = cosa.id;
          this.listainscritos = cosa.listaLibrosParticipantes;

        })
        this.crearlista();
        this.dataservice.setdataconcurso(this.concurso[0]);
      }, (err) => {

      })



  }


  public crearlista() {

    var i = 0 as number;
    this.listainscritos.forEach(libroi => {
      var idlibro = libroi;
      this.listashow = [];
      this.peticionesAPI.dameunlibro(idlibro)

        .subscribe((res) => {

          i = i + 1;
          var cuento = new Libro();
          cuento = res;


          var randomNumber = Math.floor(Math.random() * 11);
          var urlPicture = 'assets/imgs/libro' + randomNumber + '.png';
          cuento.foto = urlPicture;

          this.listashow.push(cuento);

          console.log(this.listashow);


          })
        
    }, (err) => {
      console.log(err);


    })






  }


  irareproductor(id) {
    localStorage.setItem("idLibro", id);
    this.router.navigate(['/reproductor/3']);



  }

  obtenerpuntuacionactual() {






  }


  salir() {
    this.router.navigate(["login"]);
  }



}
