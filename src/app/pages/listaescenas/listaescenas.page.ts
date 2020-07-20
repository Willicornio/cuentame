import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Escena } from 'src/app/models/escena';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { literalArr } from '@angular/compiler/src/output/output_ast';
import {PeticionesapiService} from '../../services/peticionesapi.service';


@Component({
  selector: 'app-listaescenas',
  templateUrl: './listaescenas.page.html',
  styleUrls: ['./listaescenas.page.scss'],

})
export class ListaescenasPage implements OnInit {

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private peticionesAPI: PeticionesapiService) { }
  @ViewChild('content') content:any;


  idLibro : any;
  listaEscenas: EscenaFrames[] = [];
  creacion : any = false;

  ngOnInit() {

    this.idLibro  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id libro : " + this.idLibro);

    var escena = new EscenaFrames();
    escena.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena2 = new EscenaFrames();
    escena2.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena3 = new EscenaFrames();
    escena3.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena4 = new EscenaFrames();
    escena4.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena4 = new EscenaFrames();
    escena4.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena5 = new EscenaFrames();
    escena5.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena6 = new EscenaFrames();
    escena6.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena7 = new EscenaFrames();
    escena7.fondo = '/assets/imgs/nuevolibro.jpg';

    var escena8 = new EscenaFrames();
    escena8.fondo = '/assets/imgs/nuevolibro.jpg';

    this.listaEscenas.push(escena);
    this.listaEscenas.push(escena2);
    this.listaEscenas.push(escena3);
    this.listaEscenas.push(escena4);
    this.listaEscenas.push(escena5);
    this.listaEscenas.push(escena6);
    this.listaEscenas.push(escena7);
    this.listaEscenas.push(escena8);


    var crearEscena = new EscenaFrames();
    crearEscena.fondo = '../../assets/imgs/mas.png';
    crearEscena.duracionFrame = "No";

    this.listaEscenas.push(crearEscena);
    this.damelibro();

    this.creacion = false;

  }

  damelibro(){
    var idalumno= localStorage.getItem("idAlumno");

    this.peticionesAPI.Damelibro(idalumno, this.idLibro)
    .subscribe(res => {
      console.log(res);
     
          
    });
  

   }




  clickEscena(escena : EscenaFrames)
  {
    if(escena.duracionFrame = "No")
    {


      this.creacion = true;

      this.bajarEscena();
    }

  }

  bajarEscena(){
    this.content.scrollToBottom(0);//300ms animation speed

    this.content.scrollToBottom(0);//300ms animation speed
    this.content.scrollToBottom(0);//300ms animation speed

  }

  crearEscena(){

    var n = document.getElementById("nFramesId");
    var s = document.getElementById("sFramesId");

    // // var numero = n.value;
    // // var segundos = s.value;

    // console.log(numero + "                : " + segundos);

  }

}
