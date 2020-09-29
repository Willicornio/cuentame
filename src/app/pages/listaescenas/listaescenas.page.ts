import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Escena } from 'src/app/models/escena';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { DataService } from 'src/app/services/data.service';
import { juegolibro } from '../../models/juegolibro';
import { ImagenRecurso } from '../../models/imagenRecurso';


@Component({
  selector: 'app-listaescenas',
  templateUrl: './listaescenas.page.html',
  styleUrls: ['./listaescenas.page.scss'],

})
export class ListaescenasPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private peticionesAPI: PeticionesapiService, private dataService: DataService) { }
  @ViewChild('content') content: any;


  idLibro: any;
  listaEscenas: EscenaFrames[] = [];
  creacion: any = false;
  titulo: any = '';
  autor: any = '';
  listaWithStrings: any = [];
  escenaID: any;

  libroJuego: juegolibro;
  iServiceRecurso: any = 0;
  iNumber2: number = 0;
  listaImaganesRecurso: ImagenRecurso[] = [];

  listaRecursosWithStrings: any = [];


  iWithStringBlob: any = 0;
  lengthwithStringBlob: any = 0;

  blobString: any;

  libro: any;

  ngOnInit() {

    this.idLibro = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id libro : " + this.idLibro);

    this.dameEscenas();

    this.damelibro();

    this.creacion = false;


    this.libroJuego = new juegolibro();
    this.libroJuego.id = localStorage.getItem("idjuegolibro");


    this.cargarRecursos();


  }

  damelibro() {
    var idalumno = localStorage.getItem("idalumnojuego");

    this.peticionesAPI.Damelibro(idalumno, this.idLibro)
      .subscribe(res => {
        console.log(res);

        this.titulo = res.titulo;
        this.autor = res.autor;
        this.libro = res;

      });


  }

  dameEscenas() {

    this.peticionesAPI.dameEscenasLibro(this.idLibro)
      .subscribe(res => {
        console.log(res);

        this.listaEscenas = [];
        res.forEach(element => {
          element.fondo = '../../assets/imgs/2.png';
          this.listaEscenas.push(element);
        });

        var crearEscena = new EscenaFrames();
        crearEscena.fondo = '../../assets/imgs/mas.png';
        crearEscena.duracionFrame = 3000000;

        this.listaEscenas.push(crearEscena);

      });


  }



  clickEscena(escena: EscenaFrames) {
    if (escena.duracionFrame == 3000000) {


      this.creacion = true;

      this.bajarEscena();
    }
    else {
      this.convertBlobsToString2(escena);

    }

  }

  bajarEscena() {
    this.content.scrollToBottom(0);//300ms animation speed

    this.content.scrollToBottom(0);//300ms animation speed
    this.content.scrollToBottom(0);//300ms animation speed

  }

  crearEscena() {


    // Pass a custom class to each select interface for styling
    const selects = document.querySelectorAll('.custom-options') as any;

    for (var i = 0; i < selects.length; i++) {
      selects[i].interfaceOptions = {
        cssClass: 'my-custom-interface'
      };
    };

    if (selects[0].value != "" && selects[1].value != "") {
      var escenaNew = new EscenaFrames();
      escenaNew.duracionFrame = selects[0].value;
      escenaNew.maximoFrames = 20;
      escenaNew.numeroEscena = this.listaEscenas.length;
      escenaNew.tipoAudio = selects[1].value;
      escenaNew.urlAudioFondo = "no";

      this.peticionesAPI.postEscenaLibro(this.idLibro, escenaNew)
        .subscribe((res) => {
          console.log(res);

          this.dameEscenas();
        }, (err) => {
          console.log(err);
        })

    }
  }



  cargarRecursos() {

    this.peticionesAPI.getRecursoParaLibro(this.libroJuego.id)
      .subscribe((res) => {

        var i = 1;

        res[0].imagenes.forEach(element => {
          this.getImagenRecurso(element, res[0].carpeta, res[0].imagenes.length, i);
          i++;
        });

      }, (err) => {

      })
  }


  getImagenRecurso(element, nameFolder, length, id) {
    this.peticionesAPI.getImagen(element.url, nameFolder)
      .subscribe((res) => {

        var imagen = new ImagenRecurso();
        imagen.especial = element.especial;
        imagen.nombre = element.nombre;
        imagen.tipo = element.tipo;
        imagen.id = id;
        imagen.url = res._body;

        this.listaImaganesRecurso.push(imagen);
        if (id == length) {

          this.dataService.setDataRecursos(0, this.listaImaganesRecurso);

        }


      }, (err) => {

      })
  }


  async convertBlobsToString2(escena) {

    this.iWithStringBlob = 0;
    var listaFotoRecuros = this.dataService.getDataRecursos(0);

    this.lengthwithStringBlob = listaFotoRecuros.length;

    for (const element of listaFotoRecuros) {
      const a = new Promise<any>((resolve, reject) => {
        const blob = element.url;
        const reader = new FileReader();
        reader.onloadend = (event) => {
          if (reader.error) {
          } else {


            this.iWithStringBlob = this.iWithStringBlob + 1;
            element.url = reader.result.toString();
            this.listaRecursosWithStrings.push(element);

            if (this.iWithStringBlob == this.lengthwithStringBlob) {
              this.dataService.setDataRecursos(1, this.listaRecursosWithStrings);
              this.router.navigate(['/cuentocanvas' + "/" + escena.id])

            }
            resolve(reader);
          }

        }
        if (blob) {
          reader.readAsDataURL(blob);
        }
      });

    };


  }


  async convertBlobsToString(escena) {

    this.iWithStringBlob = 0;
    var listaFotoRecuros = this.dataService.getDataRecursos(0);

    this.lengthwithStringBlob = listaFotoRecuros.length;

    for (const element of listaFotoRecuros) {
      const a = new Promise<any>((resolve, reject) => {
        const blob = element.url;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.iWithStringBlob = this.iWithStringBlob + 1;
          element.url = reader.result.toString();
          this.listaRecursosWithStrings.push(element);

          if (this.iWithStringBlob == this.lengthwithStringBlob) {
            this.dataService.setDataRecursos(1, this.listaRecursosWithStrings);
            this.router.navigate(['/cuentocanvas' + "/" + escena.id])

          }
          resolve(reader);
        }, false);
        if (blob) {
          reader.readAsDataURL(blob);
        }
      })

    };


  }


  cambiarFinalizadoATrue() {
    this.libro.finalizado = true;

    this.peticionesAPI.putLibro(this.idLibro, this.libro)
      .subscribe((res) => {

        this.router.navigate(['/juegolibro'])


      }, (err) => {

      })
  }


}
