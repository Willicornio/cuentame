import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Escena } from 'src/app/models/escena';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { literalArr } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-listaescenas',
  templateUrl: './listaescenas.page.html',
  styleUrls: ['./listaescenas.page.scss'],
})
export class ListaescenasPage implements OnInit {

  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

  idLibro : any;
  listaEscenas: EscenaFrames[] = [];

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

    this.listaEscenas.push(escena);
    this.listaEscenas.push(escena2);
    this.listaEscenas.push(escena3);
    this.listaEscenas.push(escena4);
    this.listaEscenas.push(escena5);

  }

}
