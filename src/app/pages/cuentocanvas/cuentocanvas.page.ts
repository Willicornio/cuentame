import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Escena } from '../../models/escena';
import { Personaje } from '../../models/personaje';
import { Texto } from '../../models/textos';
import { EscenaFrames } from '../../models/escenaFrames';
import { PersonajeFrame } from '../../models/personajeFrame';
import { TextoFrame } from '../../models/textoFrame';
import { Frame } from '../../models/frame';
import { ThrowStmt } from '@angular/compiler';
import { ImagenFondo } from '../../models/imagenFondo';
import { DataService } from '../../services/data.service';
import { Libro } from '../../models/libro';
import { ImagenFrame } from '../../models/imagenFrame';
import { juegolibro } from '../../models/juegolibro';
import { ImagenRecurso } from '../../models/imagenRecurso';
import { AlertController } from '@ionic/angular';


import * as URL from '../../services/url';


import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

import { PeticionesapiService } from '../../services/peticionesapi.service';
import { createNgModule } from '@angular/compiler/src/core';
import { runInThisContext } from 'vm';
import { element } from 'protractor';
import { AnyTxtRecord } from 'dns';


@Component({
   selector: 'app-cuentocanvas',
   templateUrl: './cuentocanvas.page.html',
   styleUrls: ['./cuentocanvas.page.scss'],
})



export class CuentocanvasPage implements OnInit {
   @ViewChild('canvas') canvasEl: ElementRef;
   private _CANVAS: any;
   public _CONTEXT: any;


   public context: CanvasRenderingContext2D;

   ISize: { width: number; height: number; }


   x: any;
   y: any;
   srcq;
   fileData: File = null;
   previewUrl: any = null;
   fileUploadProgress: string = null;
   uploadedFilePath: string = null;

   imagenCargadaWidth: any;
   imagenCargadaHeight: any;
   fondoCargadaWidth: any;
   fondoCargadaHeight: any;
   src: any;
   personajeCargado: PersonajeFrame;
   imagen: any;
   pintar: boolean = false;


   listaPersonaje: Personaje[] = [];
   listaPersonajeEscenaActual: Personaje[] = [];
   listaTexto: Texto[] = [];

   listaFrames: Frame[] = [];
   listaPersonajesFrameAnterior: PersonajeFrame[] = [];
   listaPersonajeFrameActual: PersonajeFrame[] = [];



   tiempoSalida: any;
   tiempoEntrada: any;
   idPersonaje: any;
   escena: Escena;
   dialogoActual: any;

   listaFondos: ImagenFondo[] = [];
   listaElementosDerecha: PersonajeFrame[] = [];
   listaElementosIzquierda: PersonajeFrame[] = [];
   listaFotosFrame: ImagenFrame[] = [];
   listaFotosFrameBackend: File[] = [];

   buttonNewFrame = true;

   escenaFrames: EscenaFrames;
   frameActual: Frame;

   imagenRedimension: any = "";
   imagenWeith: any = "";
   imagenHeigth: any = "";

   fondoWeith: any = "";
   fondoHeigth: any = "";

   i: any = 0;
   iNumber: number = 0;

   libroJuego: juegolibro;
   iServiceRecurso: any = 0;
   iNumber2: number = 0;
   listaImaganesRecurso: ImagenRecurso[] = [];

   listaRecursosWithStrings: any = [];


   iWithStringBlob: any = 0;
   lengthwithStringBlob: any = 0;

   blobString: any;

   audioFrame: any;
   tieneVoz: any = false;

   tipoDeAudio: any = "";
   showButtonAudioFrame: any = false;
   showButtonFondoFrame: any = false;
   public PtagClicked: boolean = false;





   textoPrueba: any = "";

   constructor(public router: Router, private dataService: DataService, private peticionesApiService: PeticionesapiService, private activatedRoute: ActivatedRoute, public alertController: AlertController) {

   }

   async ionViewWillEnter() {

      this.src = localStorage.getItem("src");

      var pedirAPI = false;
      var pedirAPIRecurso = false;

      this.escenaFrames = new EscenaFrames();
      this.frameActual = new Frame();

      //Se comprueba que estemos volviendo de recoger elemento para pintar
      if (localStorage.getItem("idService") != null && localStorage.getItem("idService") != "") {
         var i = localStorage.getItem("idService");
         this.iNumber = +i;
         this.i = i;
         if (this.dataService.getData(i) != undefined && this.dataService.getData(i) != "undefined") {

            this.escenaFrames = this.dataService.getData(i);
            this.tipoDeAudio = this.escenaFrames.tipoAudio;


            if(this.escenaFrames.tipoAudio == "frame")
            {
               this.showButtonAudioFrame = true;
            }

            else{
               this.showButtonFondoFrame = true;
            }

            if(this.showButtonFondoFrame == true && this.escenaFrames.urlAudioFondo != "no")
            {
               var contenedor = localStorage.getItem("contenedor");
               this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;
               this.tieneVoz = true;
            }
          

            if (this.src == "tengo") {
               this.escenaFrames.fondo = this.dataService.getDataRecursos(500);
               localStorage.setItem("src", "");
            }

            if (this.escenaFrames.frames[this.escenaFrames.numeroframeActual - 1] != undefined && this.escenaFrames.frames[this.escenaFrames.numeroframeActual - 1] != "undefined") {
               this.frameActual = this.escenaFrames.frames[this.escenaFrames.numeroframeActual - 1];
               if(this.frameActual.audioUrl != [])
               {
                  var contenedor = localStorage.getItem("contenedor");
                  this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;
                  this.tieneVoz = true;
               }
               this.drawimages(this.frameActual.personajes);
               this.listaPersonajeFrameActual = this.frameActual.personajes;
               console.log("Estamos de vuelta en la Home del cuento");
               console.log(this.escenaFrames);

             




               this.i = this.iNumber + 1;
            }
         }
         else { pedirAPI = true }
      }
      else { pedirAPI = true }

      if (pedirAPI == true) {

         if (this.activatedRoute.snapshot.paramMap.get('id')) {
            var id = this.activatedRoute.snapshot.paramMap.get('id');
            localStorage.setItem("idEscena", id);

            await this.getEscena(id);

         }
      }

      //Se comprueba y se carga la imagen del personaje cargado
      if (localStorage.getItem("fotoPersonaje") != null && localStorage.getItem("idPersonaje") != "" && (localStorage.getItem("fotoPersonaje") != null && localStorage.getItem("idPersonaje") != "")) {

         this.personajeCargado = new PersonajeFrame();
         // this.personajeCargado.foto = localStorage.getItem("fotoPersonaje");
         // this.personajeCargado.id = localStorage.getItem("idPersonaje");
         this.personajeCargado.foto = this.dataService.getDataRecursos(600);
         this.personajeCargado.id = this.dataService.getDataRecursos(602);
         localStorage.setItem("fotoPersonaje", "");
         localStorage.setItem("idPersonaje", "");

         this.imagenRedimension = this.dataService.getDataRecursos(601);
         this.imagen = new Image();
         this.imagen.src = this.dataService.getDataRecursos(601);
         const image = {
            url: this.imagen.src,
            context: 'client context'
         }
         this.getImageDimension(image).subscribe(
            response => {
               console.log(response);
               this.imagenCargadaHeight = response.height;
               this.imagenCargadaWidth = response.width;
               this.imagenHeigth = response.height;
               this.imagenWeith = response.width;
            }
         )

         this.pintar = true;

      }



   }



   async ngOnInit() {

      this.libroJuego = new juegolibro();
      this.libroJuego.id = 25;


      this.cargarAlumnoJuegoLibro();



      this.escenaFrames = new EscenaFrames();
      this.frameActual = new Frame();


      if (this.activatedRoute.snapshot.paramMap.get('id')) {
         var id = this.activatedRoute.snapshot.paramMap.get('id');
         // await this.getEscena(id);

      }

      this.src = localStorage.getItem("src");
      this.escena = new Escena();



      // this.listaPersonajeFrameActual.push(brujita);
      // this.listaPersonajeFrameActual.push(reina);
      // this.listaPersonajeFrameActual.push(brujita2);
      // this.listaPersonajeFrameActual.push(reina2);


      this.generarListaPersonajesEnPantalla();

      //Escena para dibujar:

      //Esto simula que nos llega una lista de fondos:
      var imagen = new ImagenFondo();
      imagen.id = 0;
      imagen.src = '../../../assets/imgs/1.png';
      imagen.pos = true;

      var imagen2 = new ImagenFondo();
      imagen2.id = 1;
      imagen2.src = '../../../assets/imgs/2.png';
      imagen2.pos = false;

      var imagen3 = new ImagenFondo();
      imagen3.id = 2;
      imagen3.src = '../../../assets/imgs/3.png';
      imagen3.pos = true;

      var imagen4 = new ImagenFondo();
      imagen4.id = 3;
      imagen4.src = '../../../assets/imgs/4.png';
      imagen4.pos = false;

      var imagen5 = new ImagenFondo();
      imagen5.id = 4;
      imagen5.src = '../../../assets/imgs/4.png';
      imagen5.pos = false;

      var imagen6 = new ImagenFondo();
      imagen6.id = 5;
      imagen6.src = '../../../assets/imgs/4.png';
      imagen6.pos = false;

      var imagen7 = new ImagenFondo();
      imagen7.id = 6;
      imagen7.src = '../../../assets/imgs/4.png';
      imagen7.pos = false;

      var imagen8 = new ImagenFondo();
      imagen8.id = 7;
      imagen8.src = '../../../assets/imgs/4.png';
      imagen8.pos = false;

      this.listaFondos.push(imagen);
      this.listaFondos.push(imagen2);
      this.listaFondos.push(imagen3);
      this.listaFondos.push(imagen4);
      this.listaFondos.push(imagen5);
      this.listaFondos.push(imagen6);
      this.listaFondos.push(imagen7);
      this.listaFondos.push(imagen8);


      //ahora vamos a generar las lista derecha y la lista izquierda:

      //   this.generarListaFondos();

   }





   cargarAlumnoJuegoLibro() {

      var ID = localStorage.getItem("idAlumno");
      this.peticionesApiService.getAlumnoJugegosLibro(this.libroJuego.id)
         .subscribe((res) => {

            res.forEach(element => {
               if (element.alumnoID == ID) {
                  this.dataService.setDataRecursos(1000, element);
               }

            });

         }, (err) => {

         })
   }








   async getEscena(id) {

      this.peticionesApiService.getEscena(id).subscribe(async (res) => {
         this.escenaFrames = res as EscenaFrames;
         this.tipoDeAudio = this.escenaFrames.tipoAudio;

         if(this.tipoDeAudio == "frame")
      {
         this.showButtonAudioFrame = true;
      }
      else 
      {
         this.showButtonFondoFrame = true;
      }

      if(this.showButtonFondoFrame && this.escenaFrames.urlAudioFondo != "no"){

         var contenedor = localStorage.getItem("contenedor");
         this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;

         this.tieneVoz = true;
      }


         await this.getFrames(id);
      }, (err) => {
         console.log(err);
      })
   }

   async getFrames(id) {

      this.peticionesApiService.getFramesByEscenaId(id).subscribe((res) => {

         var listaFrames: Frame[] = [];

         if (res.length == 0) {
            var newFrame = new Frame();
            newFrame.numero = 1;
            this.frameActual = newFrame;

            listaFrames.push(newFrame);
            this.escenaFrames.frames = listaFrames;

            this.peticionesApiService.postFrame(this.escenaFrames.id, newFrame).subscribe(async (res) => {

               this.frameActual.id = res.id;
               await this.uploadNumeroFrameEscena();

            }, (err) => {
               console.log(err);
            })
         }
         else if (res.length != 0) {
            res.forEach(element => {
               listaFrames.push(element as Frame);

            });

            this.escenaFrames.frames = listaFrames;

            this.frameActual = this.escenaFrames.frames[0];
            var contenedor = localStorage.getItem("contenedor");

            if(this.frameActual.audioUrl != "" && this.tipoDeAudio == "frame")
            {
               this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;
               this.tieneVoz = true;
            }
            else if (this.frameActual.audioUrl == "" && this.tipoDeAudio == "frame")
            {
               this.tieneVoz = true;  
            }
            if (this.escenaFrames.frames.length != 1) {
               this.buttonNewFrame = false;
               this.firstDrawImages(this.frameActual.personajes);
            }

            listaFrames.forEach(element => {
               var contenedor = localStorage.getItem("contenedor");
               this.peticionesApiService.getImagen(contenedor, element.portadaFrame).subscribe((res) => {
                  this.listaFotosFrameBackend.push(res);
                  console.log(res);
               }, (err) => {

               })
            })
         }
      }
         , (err) => {
            console.log(err);
         })
   }

   uploadNumeroFrameEscena() {

      var newEscenaNumeroFrames = this.escenaFrames.numeroFrames;
      newEscenaNumeroFrames = newEscenaNumeroFrames + 1;
      this.escenaFrames.numeroFrames = newEscenaNumeroFrames;

      this.escenaFrames.frames.forEach(frame => {

         frame.personajes.forEach(element => {

            element.url = "";
         });
      });

      this.peticionesApiService.putEscena(this.escenaFrames.id, this.escenaFrames)
         .subscribe((res) => {

         }, (err) => {

         })
   }

   saveTheFrames() {

      const select = document.getElementById('audio') as any;
      if(select != null){

      var duration = select.duration;
      var arrayNew = this.escenaFrames.frames as any;
      
      this.escenaFrames.frames[ arrayNew.length-1].duracionAudio = duration;
      }
      this.escenaFrames.frames.forEach(element => {
         element.personajes.forEach(per => {
            per.url = "";
         });

         this.peticionesApiService.putFrame(this.escenaFrames.id, element.id, element)
            .subscribe((res) => {

            }, (err) => {

               console.log(err);
            })
      });
   }


   generarListaPersonajesEnPantalla() {

      var listaRecursosService = this.dataService.getDataRecursos(1);

      this.listaElementosDerecha = [];
      this.listaElementosIzquierda = [];

      this.frameActual.personajes.forEach(obj => {

         if (obj.id % 2 == 0) {
            listaRecursosService.forEach(element => {
               if (element.nombre == obj.foto) {
                  var personaje: any;
                  personaje = obj;
                  personaje.url = element.url;
                  this.listaElementosIzquierda.push(personaje)
               }

            });
         }
         else if (obj.id % 2 != 0) {
            listaRecursosService.forEach(element => {
               if (element.nombre == obj.foto) {
                  var personaje: any;
                  personaje = obj;
                  personaje.url = element.url; this.listaElementosDerecha.push(personaje)
               }

            });
         }
      })

   }


   borrarPersonajeEscena(personaje: PersonajeFrame) {

      this.listaPersonaje.forEach(obj => {
         if (obj.id == personaje.id) {
         }
      });
      this.frameActual.personajes = this.frameActual.personajes.filter(obj => obj.id !== personaje.id);

      this.escenaFrames.frames[this.frameActual.numero - 1] = this.frameActual;
      this.generarListaPersonajesEnPantalla();
      this.drawimages(this.frameActual.personajes);

      this.guardarFoto();
   }
   //ionViewDidEnter
   //   ionViewDidLoad
   ionViewDidEnter() {
      this._CANVAS = this.canvasEl.nativeElement;
      this._CANVAS.width = 900;
      this._CANVAS.height = 600;

      this.initialiseCanvas();

   }
   initialiseCanvas() {
      if (this._CANVAS.getContext) {
         this.setupCanvas();

      }
   }
   guardarFoto() {

      var micanvas = document.getElementById("micanvas") as HTMLCanvasElement;
      var dataURL = micanvas.toDataURL();
      var numeroFrame = this.frameActual.numero;
      var fotoFrame = new ImagenFrame();
      fotoFrame.codigo = this.escenaFrames.numeroEscena + "-" + numeroFrame + '-' + this.frameActual.id;
      fotoFrame.foto = dataURL;
      fotoFrame.numeroFrame = numeroFrame;
      var numeroFrameActual = numeroFrame - 1;

      if (!this.listaFotosFrame[numeroFrameActual]) {

         this.listaFotosFrame.push(fotoFrame);

      }
      else {
         this.listaFotosFrame[numeroFrameActual] = fotoFrame;
      }
   }

   async guardar() {

      this.listaFotosFrame.forEach(async element => {
         const formData: FormData = new FormData();
         var file = this.dataURLtoFile(element.foto, element.codigo + '.png');

         formData.append('fotoFrame', file);

         await this.postFotoFrame(formData, element);

      });

      this.peticionesApiService.postEscena(this.escenaFrames)
         .subscribe((res) => {
            console.log(res)

         }, (err) => { console.log(err); }
         );


   }

   masTamano() {
      this.imagenHeigth = this.imagenHeigth + 10;
      this.imagenWeith = this.imagenHeigth + 10;

   }
   menosTamano() {
      this.imagenHeigth = this.imagenHeigth - 10;
      this.imagenWeith = this.imagenHeigth - 10;
   }



   async putPortadaFrame(frame: Frame) {
      this.peticionesApiService.putFrame(this.escenaFrames.id, frame.id, frame)
         .subscribe((res) => {

         }
            , (err) => {

            });
   }

   async postFotoFrame(formData: FormData, element: ImagenFrame) {

      var contenedor = localStorage.getItem("contenedor");

      this.peticionesApiService.postImage(contenedor, formData)
         .subscribe((res) => {
            var frame = this.escenaFrames.frames[element.numeroFrame - 1] as Frame;
            frame.portadaFrame = element.codigo + '.png';
            this.escenaFrames.frames[element.numeroFrame - 1] = frame;
            this.putPortadaFrame(frame);

         }
            , (err) => {
               console.log("error al subir la imagem");
               console.log('Error : ' + err);
            });
   }

   crearRepo() {

      const name = {
         "name": "nivel2"
      }

      this.peticionesApiService.createFolder(name)
         .subscribe((res) =>
            console.log(res),

            (err) => (console.log(err))
         )
   }

   irAFondos() {

      localStorage.setItem("idService", this.i);
      this.dataService.setData(this.i, this.escenaFrames);
      this.router.navigate(["cuentofondos"]);

   }

   irAPersonajes() {

      localStorage.setItem("idService", this.i);
      this.dataService.setData(this.i, this.escenaFrames);
      this.router.navigate(["seleccionpersonaje"]);

   }



   cargarFrame(numero) {
      this.frameActual = this.listaFrames[numero];
      this.drawimages(this.frameActual.personajes);
   }

   nuevoFrame() {

      this.frameActual.portadaFrame = this.guardar();
      this.listaFrames[this.frameActual.numero - 1] = this.frameActual;
      var numeroFrames = this.escenaFrames.numeroFrames + 1;
      if (this.escenaFrames.maximoFrames >= numeroFrames) {
         this.escenaFrames.numeroFrames = this.escenaFrames.numeroFrames + 1;
         this.listaPersonajesFrameAnterior = this.frameActual.personajes;

         this.frameActual = new Frame();
         this.frameActual.portadaFrame = '../../assets/imgs/noFotoPortada.png';
         this.frameActual.numero = numeroFrames;
         this.listaFrames.push(this.frameActual);
         this.escenaFrames.frames = this.listaFrames;

         this.drawimages(this.frameActual.personajes);

      }
      else {
         console.log("Maximo de frames alcanzado");
      }

   }



   fireEvent(e) {
      console.log(e.type);
      console.log(e.x);
      console.log(e.y);

      if (this.pintar == true) {
         var ima = new Image();


         ima.onload = () => {
            this._CONTEXT.beginPath();
            var x = 590;
            var y = 590;
            this._CONTEXT = this._CANVAS.getContext('2d');

            this._CONTEXT.drawImage(this.imagen, e.x - this.imagenWeith / 2, e.y - this.imagenHeigth / 2, this.imagenWeith, this.imagenHeigth);
            this._CONTEXT.stroke();
            this.guardarFoto();

         };
         ima.src = this.imagen.src;
         this.pintar = false;

         var personaje = new PersonajeFrame();
         personaje.id = this.personajeCargado.id;
         personaje.foto = this.personajeCargado.foto;
         personaje.positionX = e.x - this.imagenWeith / 2;
         personaje.positionY = e.y - this.imagenHeigth / 2;
         personaje.alto = this.imagenHeigth;
         personaje.ancho = this.imagenWeith

         this.listaPersonajeFrameActual = this.frameActual.personajes;

         this.listaPersonajeFrameActual.push(personaje);

         this.frameActual.personajes = this.listaPersonajeFrameActual;

         this.escenaFrames.frames[this.frameActual.numero - 1] = this.frameActual;
         this.generarListaPersonajesEnPantalla();

      }
      else {
         console.log("No se ha cargado la imagen aun eh");

      }
   }

   continuarEscena() {
      this.drawimages(this.listaPersonajeEscenaActual);
   }

   newFrame() {

      const select = document.getElementById('audio') as any;
        if(select != null){
        var duration = select.duration;
        this.frameActual.duracionAudio= duration;
        }
      var newFrame = new Frame();

      newFrame.numero = this.frameActual.numero + 1;
      newFrame.portadaFrame = '';
      newFrame.textos = '';

      var listaP = [];
      this.frameActual.personajes.forEach(element => {
         element.url = "";
         listaP.push(element);
      });

      newFrame.personajes = listaP;
      this.listaFrames = this.escenaFrames.frames;
      this.listaFrames.push(newFrame)
      this.escenaFrames.frames = this.listaFrames;
      this.escenaFrames.numeroframeActual = newFrame.numero;
      this.escenaFrames.numeroFrames = this.escenaFrames.numeroFrames + 1;

      this.frameActual = newFrame;
      this.drawimages(this.frameActual.personajes);
      var contenedor = localStorage.getItem("contenedor");
      this.tieneVoz = false;
      if(this.frameActual.audioUrl != "" && this.showButtonAudioFrame == true)
      {
         this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;  
         this.tieneVoz = true;
      }
      else if(this.showButtonFondoFrame && this.escenaFrames.urlAudioFondo != "no")
      {
         this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;  
         this.tieneVoz = true;
      }

      this.peticionesApiService.postFrame(this.escenaFrames.id, newFrame).subscribe(async (res) => {

         this.frameActual.id = res.id;
         await this.uploadNumeroFrameEscena()
      }, (err) => {
         console.log(err);
      })

   }

   nextFrame() {

      const select = document.getElementById('audio') as any;
      if(select != null){
         var duration = select.duration;
         this.frameActual.duracionAudio= duration;
         }
      this.tieneVoz = false;
      if (this.frameActual.numero < this.escenaFrames.numeroFrames) {
         var numero = this.frameActual.numero;
         this.frameActual = this.escenaFrames.frames[numero];
         this.escenaFrames.numeroframeActual = numero + 1;
         this.escenaFrames.numeroFrames
         this.drawimages(this.frameActual.personajes);
         this.generarListaPersonajesEnPantalla();
         this.textoPrueba = this.frameActual.textos;
         var contenedor = localStorage.getItem("contenedor");
         if(this.frameActual.audioUrl != "" && this.showButtonAudioFrame == true)
         {
            this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;  
            this.tieneVoz = true;
         }
         else if(this.showButtonFondoFrame && this.escenaFrames.urlAudioFondo != "no")
         {
            this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;  
            this.tieneVoz = true;
         }
      }

      if (this.escenaFrames.frames[this.frameActual.numero] == undefined || this.escenaFrames.frames[this.frameActual.numero] == "undefined") {
         if (this.frameActual.numero == this.escenaFrames.maximoFrames) {
            this.buttonNewFrame = false;

         }
         else {
            this.buttonNewFrame = true;

         }
      }
      console.log("next");
   }


   antiNextFrame() {

        const select = document.getElementById('audio') as any;
        if(select != null){
        var duration = select.duration;
        this.frameActual.duracionAudio= duration;
        }
        this.tieneVoz = false;
      if (this.frameActual.numero > 1) {
         var numero = this.frameActual.numero;
         this.frameActual = this.escenaFrames.frames[numero - 2];
         this.escenaFrames.numeroframeActual = numero - 1;
         this.drawimages(this.frameActual.personajes);
         this.generarListaPersonajesEnPantalla();
         var contenedor = localStorage.getItem("contenedor");
         this.textoPrueba = this.frameActual.textos;

         if(this.frameActual.audioUrl != "" && this.showButtonAudioFrame == true)
         {
            this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;  
            this.tieneVoz = true;
         }
         else if(this.showButtonFondoFrame && this.escenaFrames.urlAudioFondo != "no")
         {
            this.audioFrame =  URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;  
            this.tieneVoz = true;
         }
         this.buttonNewFrame = false;
      }
      console.log("antinext");

   }

   putText(texto: NgForm) {

      this.dibujarDilogoSaveImage(texto.value.name);

   }
   dibujarDilogo(dialogo) {

      this.dialogoActual = dialogo;
      this.frameActual.textos = dialogo;
      this.escenaFrames.frames[this.frameActual.numero - 1] = this.frameActual;
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.font = '20px Roboto';
      this._CONTEXT.strokeText(dialogo, 50, 450);
   }


   // ["Arial", "Serif", "Roboto", "Times New Roman", "Times", "Courier New", "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman",
   // "Comic Sans MS", "Candara", "Arial Black", "Impact", "FugazOne", "GermaniaOne", "GorditasBold", "GorditasRegular",
   // "KaushanScript", "LeckerliOne", "Lemon", "LilitaOne", "LuckiestGuy", "Molle", "MrDafoe", "MrsSheppards",
   // "Norican", "OriginalSurfer", "OswaldBold", "OswaldLight", "OswaldRegular", "Pacifico", "Paprika", "Playball",
   // "Quando", "Ranchers", "SansitaOne", "SpicyRice", "TitanOne", "Yellowtail", "Yesteryear"]

   dibujarDilogoSaveImage(dialogo) {

      this.dialogoActual = dialogo;
      this.frameActual.textos = dialogo;
      this.textoPrueba = dialogo;
      // this.frameActual.textos = dialogo;
      // this.escenaFrames.frames[this.frameActual.numero - 1] = this.frameActual;
      // this._CONTEXT.lineWidth = 2;
      // this._CONTEXT = this._CANVAS.getContext('2d');
      // this._CONTEXT.font = '20px Arial';
      // this._CONTEXT.strokeText(dialogo, 50, 450);

      this.guardarFoto();


   }



   lineaTexto(): void {
      this._CONTEXT.beginPath();
      // this._CONTEXT.moveTo(this._CANVAS.width / 2 - 100, this._CANVAS.height / 2 + 100);
      this._CONTEXT.moveTo(0, 640);

      this._CONTEXT.lineTo(this._CANVAS.width, 640);
      // this._CONTEXT.lineTo(this._CANVAS.width / 2, this._CANVAS.height / 2);
      // this._CONTEXT.lineTo(this._CANVAS.width / 2 - 100, this._CANVAS.height / 2 + 100);
      this._CONTEXT.lineWidth = 10;
      this._CONTEXT.strokeStyle = '#000000';
      this._CONTEXT.stroke();
   }

   putImage(url: NgForm) {


      this.tiempoEntrada = url.value.tiempoentrada;
      this.idPersonaje = url.value.id;
      this.pintar = true;
      var imagen = new Image();
      imagen.src = url.value.name;
      // imagen.crossOrigin = "Anonymous";

      this.imagen = imagen;

      const image = {
         url: url.value.name,
         context: 'client context'
      }
      this.getImageDimension(image).subscribe(
         response => {
            console.log(response);
            this.imagenCargadaHeight = response.height;
            this.imagenCargadaWidth = response.width;
         }
      )
   }

   cargaimagenFake(): void {

      this.pintar = true;
      this.idPersonaje = "Brujita"
      var imagen = new Image();
      imagen.src = '../../assets/imgs/haberlas.png';
      // imagen.crossOrigin = "Anonymous";

      this.imagen = imagen;

      // this.getImageDimension(this.imagen).subscribe(
      //    response => {
      //       console.log(response);
      //    });
      const image = {
         url: this.imagen.src,
         context: 'client context'
      }
      this.getImageDimension(image).subscribe(
         response => {
            console.log(response);
            this.imagenCargadaHeight = response.height;
            this.imagenCargadaWidth = response.width;
         }
      );
   }

   cargaimagen(): void {

      this.pintar = true;
      console.log('jiji');
      var img = new Image();
      var img2 = new Image();

      img.crossOrigin = "Anonymous";
      img2.crossOrigin = "Anonymous";
      var imagen = new Image();
      imagen.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//037.png";
      // imagen.crossOrigin = "Anonymous";

      this.imagen = imagen;
      this.clearCanvas();

      //    img.onload = ()=> {

      //  this._CONTEXT.beginPath();
      //   var x =590;
      //   var y =590;
      //    this._CONTEXT.drawImage(img, this.x, this.y);
      //    this._CONTEXT.drawImage(img2, 1090, 1090);
      //    this._CONTEXT.stroke();
      //    };
      img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
      img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//037.png';

      // this.getImageDimension(this.imagen).subscribe(
      //    response => {
      //       console.log(response);
      //    });
      const image = {
         url: this.imagen.src,
         context: 'client context'
      }
      this.getImageDimension(image).subscribe(
         response => {
            console.log(response);
            this.imagenCargadaHeight = response.height;
            this.imagenCargadaWidth = response.width;
         }
      );
   }

   vertexto() {
      this.clearCanvas();
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.font = '48px serif';
      this._CONTEXT.strokeText('Hola soy un texto, puedes leereme, me llamo letra.', 50, 50);
   }

   setupCanvas() {

      this._CONTEXT = this._CANVAS.getContext('2d');
      if (this.src != null && this.src != "ya fue pintado") {
         var img3 = new Image();
         img3.src = this.src;
         img3.width = 900;
         img3.height = 600;



         this.clearCanvas();
         this._CONTEXT = this._CANVAS.getContext('2d');
         var pat = this._CONTEXT.createPattern(img3, "repeat");
         this._CONTEXT.fillStyle = pat;
         this._CONTEXT.fillRect(0, 0, 1100, 800);





      }
      else
         console.log("a por otra cosa mariposa")

      //   var pat = this._CONTEXT.createPattern(img3, "repeat");
      //   this._CONTEXT.fillStyle = pat; 
      this._CONTEXT.fillRect(0, 0, 1100, 800);
      this.drawimages(this.frameActual.personajes);
      //   var img3 = new Image();
      //   img3.crossOrigin = "Anonymous";
      //   img3.src = 'https://static.vecteezy.com/system/resources/previews/000/263/062/non_2x/cartoon-spring-or-summer-landscape-vector.jpg';

   }
   clearCanvas() {
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      // this.refreshFondo();
   }


   fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
   }

   preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
         return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(this.fileData);
      reader.onload = (_event) => {
         this.previewUrl = reader.result;
      }
   }

   onSubmit() {
      const formData = new FormData();
      formData.append('file', this.fileData);


      console.log("Vamos a mirar que hay en la imagen")
      //this.resetForm(form);
      //this.router.navigateByUrl("/tabs/tab1");

   }


   getImageDimension(image): Observable<any> {
      return new Observable(observer => {
         const img = new Image();
         img.onload = function (event) {
            const loadedImage: any = event.currentTarget;
            image.width = loadedImage.width;
            image.height = loadedImage.height;
            observer.next(image);
            observer.complete();
         }
         img.src = image.url;
      });
   }




   refreshFondo() {
      var img3 = new Image();
      var listaFotoRecuros = this.dataService.getDataRecursos(1);

      listaFotoRecuros.forEach(element => {

         if (element.nombre == this.escenaFrames.fondo) {
            img3.src = element.url;
         }

      });

      // this.getImageDimension(img3).subscribe(
      //    response => {
      //       console.log(response);
      //       this.fondoCargadaHeight = response.height;
      //       this.fondoCargadaWidth = response.width;
      //       this.fondoHeigth = response.height;
      //       this.fondoWeith = response.width;
      //    }
      // )



      this._CONTEXT = this._CANVAS.getContext('2d');
      var pat = this._CONTEXT.createPattern(img3, "repeat", 900, );
      
      this._CONTEXT.fillStyle = pat;
      this._CONTEXT.fillRect(0, 0, 1900, 1900);

      this._CONTEXT = this._CANVAS.getContext('2d');

                  this._CONTEXT.drawImage(   // Image
                     img3,
                     0,
                     0,
                     900,
                     600
                  );
                  this._CONTEXT.stroke();
   }

   timeLeft: number = 60;
   timeNow;
   interval;


   reconstruirEscena() {

      var copiaEscena = this.escena;
      var listaParaPintar = [];
      this.timeNow = 0;
      this.interval = setInterval(() => {
         if (this.timeLeft > 0) {
            this.timeLeft--;
            this.timeNow++;
            copiaEscena.personajes.forEach(element => {
               const img = new Image();

               if (element.tiempoEntrada <= this.timeNow && element.pintado == false) {
                  // var existe = listaParaPintar.filter(obj => obj.id == element.id);
                  // if (existe == null || existe == undefined){ listaParaPintar.push(element); } 
                  listaParaPintar.push(element);
                  this.drawimages(listaParaPintar);
                  element.pintado = true;
               }


               if (element.tiempoSalida <= this.timeNow && element.pintado == true) {
                  listaParaPintar = listaParaPintar.filter(obj => obj.id !== element.id);
                  this.drawimages(listaParaPintar);
                  element.pintado = "fuera";
               }

            });

            copiaEscena.textos.forEach(dialogo => {

               if (dialogo.tiempo <= this.timeNow && dialogo.escrito == false) {
                  dialogo.escrito = true;
                  this.dialogoActual = dialogo.texto

                  this.drawimages(listaParaPintar);

               }

            })

         } else {
            this.timeLeft = 60;
         }
      }, 1)
   }



   //Esto es un ejemplo de como pillar un mini mario en una imagen con muchos marios y medio animarlo

   //Pausar el timer (servirá para hacer un botón de pausa igual)
   pauseTimer() {
      clearInterval(this.interval);
   }
   muestrame = false;
   muestra() {
      this.muestrame = true;
   }
   oculta() {

      this.muestrame = false;
   }

   hiddenPersonajes = false;
   verListaPersonajes() {
      if (this.hiddenPersonajes == false) {
         this.hiddenPersonajes = true;
      }
      else { this.hiddenPersonajes = false; }

   }


   // cargarfondo() {
   //    var img3 = new Image();

   //    img3.src = this.srcq;
   //    // img3.src = '../../assets/imgs/fondo1.jpg';
   //    img3.width = 900;
   //    img3.height = 900; 

   //    this.clearCanvas();
   //    this._CONTEXT = this._CANVAS.getContext('2d');

   //     var pat = this._CONTEXT.createPattern(img3, "repeat");
   //     this._CONTEXT.fillStyle = pat;
   //     this._CONTEXT.fillRect(0, 0, 900, 900);

   //    this.escena.fondo = img3.src;

   // }

   seleccionarfondo() {

      // if(this.src != null){
      //    var srq = this.src;
      //   var img3 = new Image();

      //    img3.src = this.src;
      //   img3.width = 900;
      //   img3.height = 900; 

      //   this.clearCanvas();
      //   this._CONTEXT = this._CANVAS.getContext('2d');
      //      var pat = this._CONTEXT.createPattern(img3, "repeat");
      //    this._CONTEXT.fillStyle = pat;
      //    this._CONTEXT.fillRect(0, 0, 1100, 800);

      //   this.escena.fondo = img3.src;
      // }
      //  else
      //    console.log("a por otra cosa mariposa")


   }




   reconstruirEscenaOnePicture() {


      var copiaEscena = this.escena;
      var listaParaPintar = [];
      this.timeNow = 0;
      this.interval = setInterval(() => {
         if (this.timeLeft > 0) {
            this.timeLeft--;
            this.timeNow++;
            copiaEscena.personajes.forEach(element => {
               const img = new Image();

               if (element.tiempoEntrada <= this.timeNow && element.pintado == false) {
                  // var existe = listaParaPintar.filter(obj => obj.id == element.id);
                  // if (existe == null || existe == undefined){ listaParaPintar.push(element); } 
                  listaParaPintar.push(element);
                  this.drawimagesInOnePicture(listaParaPintar);
                  element.pintado = true;
               }


               if (element.tiempoSalida <= this.timeNow && element.pintado == true) {
                  listaParaPintar = listaParaPintar.filter(obj => obj.id !== element.id);
                  this.drawimagesInOnePicture(listaParaPintar);
                  element.pintado = "fuera";
               }

            });

            copiaEscena.textos.forEach(dialogo => {

               if (dialogo.tiempo <= this.timeNow && dialogo.escrito == false) {
                  dialogo.escrito = true;
                  this.dialogoActual = dialogo.texto

                  this.drawimagesInOnePicture(listaParaPintar);

               }

            })

         } else {
            this.timeLeft = 60;
         }
      }, 1)
   }

   firstDrawImages(listaPersonajesFrame) {
      this.refreshFondo();
      this.drawimages(listaPersonajesFrame);
   }

   async drawimages(listaPersonajesFrame) {

      this.clearCanvas();
      this.refreshFondo();
      // this.lineaTexto();
      var listaFotoRecuros = this.dataService.getDataRecursos(1);

      for (const personaje of listaPersonajesFrame) {


         const img = new Image();

         for (const element of listaFotoRecuros) {


            if (element.nombre == personaje.foto) {

               img.src = element.url;
               img.onload = () => {
                  this._CONTEXT = this._CANVAS.getContext('2d');

                  this._CONTEXT.drawImage(   // Image
                     img,
                     personaje.positionX,
                     personaje.positionY,
                     personaje.alto,
                     personaje.ancho
                  );
                  this._CONTEXT.stroke();
               }
            }

         };

      }
      // this.dibujarDilogo(this.frameActual.textos);

   }


   drawimagesInOnePicture(escena) {

      this.clearCanvas();
      this.refreshFondo();
      this.lineaTexto();
      // this.dibujarDilogo();
      escena.forEach(element => {
         var zoomAncho = element.ancho * 2;
         var zoomAlto = element.alto * 2;
         if (element.id == "monstruo") {
            var zoomAncho = element.ancho * 6.5;
            var zoomAlto = element.alto * 6.5;
         }

         const img = new Image();
         img.src = element.foto;
         img.onload = () => {
            this._CONTEXT = this._CANVAS.getContext('2d');

            this._CONTEXT.drawImage(   // Image
               img,
               element.positionEnImagenX,
               element.positionEnImagenY,
               element.ancho,
               element.alto,
               element.positionX,
               element.positionY,
               zoomAncho,
               zoomAlto
            );
            this._CONTEXT.stroke();
         }
      });

   }


   dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
   }


   ActivarInput() {
      console.log('Activar input');
      document.getElementById('inputVoz').click();
   }



   SeleccionarFicheroVoz($event) {

      this.tieneVoz = true;
      const file = $event.target.files[0];

      var contenedor = localStorage.getItem("contenedor");



      if (this.frameActual.audioUrl != "") {
         // borro el fichero de audio de la voz anterior
         this.peticionesApiService.BorraAudioFrame(contenedor,this.frameActual.audioUrl).subscribe();
       }
   
       this.frameActual.audioUrl = file.name; 

      this.peticionesApiService.putFrame(this.escenaFrames.id, this.frameActual.id, this.frameActual)
       .subscribe ();


       const formDataOpcion = new FormData();
       formDataOpcion.append(file.fileName, file);
       this.peticionesApiService.ponAudioFrame(contenedor, formDataOpcion)
       .subscribe(async () => {
         this.tieneVoz = true;
           // Notifico al server que se ha modificado un avatar
         this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.frameActual.audioUrl;
         // const select = document.getElementById('audio') as any;
         // var duration = select.duration;
       });


   }

   async eliminarAudioFrame(){
         // borro el fichero de audio de la voz anterior
         var contenedor = localStorage.getItem("contenedor");

         this.peticionesApiService.BorraAudioFrame(contenedor,this.frameActual.audioUrl).subscribe(
            (res)=>{
               this.audioFrame = "";
               this.frameActual.audioUrl = "";
               this.tieneVoz = false;
               this.alertMuchaDuracion();
            }
         );
       
   }

   seleccionarFicheroVozFondo($event)
   {
      this.tieneVoz = true;
      const file = $event.target.files[0];

      var contenedor = localStorage.getItem("contenedor");



      if (this.escenaFrames.urlAudioFondo!="no") {
         // borro el fichero de audio de la voz anterior
         this.peticionesApiService.BorraAudioEscena(contenedor,this.escenaFrames.urlAudioFondo).subscribe();
       }
   
       this.escenaFrames.urlAudioFondo = file.name; 

      this.peticionesApiService.putEscena(this.escenaFrames.id, this.escenaFrames)
       .subscribe (
         
       );


       const formDataOpcion = new FormData();
       formDataOpcion.append(file.fileName, file);
       this.peticionesApiService.ponAudioEscena(contenedor, formDataOpcion)
       .subscribe(async () => {
         this.tieneVoz = true;
           // Notifico al server que se ha modificado un avatar
         this.audioFrame = URL.audioFrameOrFondo + contenedor + "/download/" + this.escenaFrames.urlAudioFondo;

       });
   }

 

   async alertMuchaDuracion() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Este audio es demasiado largo',
        subHeader: 'El audio tiene que durar como mucho el tiempo de frame que seleccionaste',
        message: 'Por favor  crea el cuento antes de participar en el concurso',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  
}