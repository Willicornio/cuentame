import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {PeticionesapiService} from '../../services/peticionesapi.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EscenaFrames } from 'src/app/models/escenaFrames';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {
  
  alumno: Alumno;
  libro: Libro;
  @ViewChild('canvas') canvasEl: ElementRef;
  private _CANVAS: any;

  public _CONTEXT: any;

  listaEscenas: String [] = [];
  portada: any;

  fontLibrary = ["Arial","Serif","Roboto","Times New Roman","Times","Courier New","Courier","Verdana","Georgia","Palatino","Garamond","Bookman",
  "Comic Sans MS","Candara","Arial Black","Impact","FugazOne","GermaniaOne","GorditasBold","GorditasRegular",
  "KaushanScript","LeckerliOne","Lemon","LilitaOne","LuckiestGuy","Molle","MrDafoe","MrsSheppards",
  "Norican","OriginalSurfer","OswaldBold","OswaldLight","OswaldRegular","Pacifico","Paprika","Playball",
  "Quando","Ranchers","SansitaOne","SpicyRice","TitanOne","Yellowtail","Yesteryear"];

  iFont: any = 0;
  font: any = "Arial";  
  fontPX: any = 50;

  constructor(private router: Router,  private peticionesAPI: PeticionesapiService) { }


  nombreaAlumno : any = "Horse Luis";

  ngOnInit() {

  
   
    this.libro = new Libro();
    this.libro.portada = '/assets/imgs/portada.jpg';
    //console.log("jiji");
    var escena = '../../assets/imgs/libroprederminado.jpg';

    var escena2 = '/assets/imgs/nuevolibro.jpg';

    var escena3 =  '/assets/imgs/nuevolibro.jpg';

    var escena4 = '/assets/imgs/nuevolibro.jpg';

    var escena5 =  '/assets/imgs/nuevolibro.jpg';

    var escena6 = '/assets/imgs/nuevolibro.jpg';

    var escena7  = '/assets/imgs/nuevolibro.jpg';

    var escena8  = '/assets/imgs/nuevolibro.jpg';

   

    this.listaEscenas.push(escena);
    this.listaEscenas.push(escena2);
    this.listaEscenas.push(escena3);
    this.listaEscenas.push(escena4);
    this.listaEscenas.push(escena5);
    this.listaEscenas.push(escena6);
    this.listaEscenas.push(escena7);
    this.listaEscenas.push(escena8);

    this.Damealumno();

  }
  cargarportada(){

 
    }

  Damealumno(){
    var idalumno= localStorage.getItem("idAlumno");
    this.peticionesAPI.Damealumno(idalumno)
    .subscribe(res => {
     this.alumno = res;
  
              
    });

  }


  crearlibro(form: NgForm){

    var idalumno= localStorage.getItem("idAlumno");
    if(form.value.titulo != null){
      this.libro.titulo = form.value.titulo;
      console.log("jiji");
      console.log(this.libro.titulo);
    }
      if(form.value.textarea != null){
        this.libro.resumen = form.value.textarea;
        console.log(this.libro.resumen);
      }
      this.libro.autor = this.alumno.Nombre;
      this.libro.portada ='aa';
      this.libro.puntuacion = 'nada';
      this.libro.idAlumno = this.alumno.id;
      this.libro.numeropag = '32';


         this.peticionesAPI.publicarlibro( idalumno  ,this.libro)
        .subscribe(res => {
         console.log(res);
          this.crearCarpeta(res.id);
        });
  
  
      }
      crearCarpeta(id) {

        const name = {
           "name": this.libro.titulo,
        }
  
        this.peticionesAPI.createFolder(name)
           .subscribe((res) =>
           {              
             console.log(res);
             this.router.navigate(["listaescenas/" + id]);

            },
  
              (err) => (console.log(err))
          )
          localStorage.setItem("contenedor", this.libro.titulo );
     }
   


      ionViewDidEnter() {
        this._CANVAS = this.canvasEl.nativeElement;
        this._CANVAS.width = 400;
        this._CANVAS.height = 500;
  
        this.initialiseCanvas();
  
     }


     siguienteFont()
     {
       if(this.iFont < 42)
       {
         this.iFont = this.iFont + 1;
        this.font = this.fontLibrary[this.iFont];
        this.recargarPortada(this.font, this.fontPX);
       }else{
        console.log("No hay más fuentes");

       }
     }

     fontAnterior()
     {
       if(this.iFont > 0)
       {
         this.iFont = this.iFont - 1 ;
        this.font = this.fontLibrary[this.iFont];
        this.recargarPortada(this.font, this.fontPX);
       }else{
        console.log("No puedes bajar de 0");

       }
     }

     menosPX(){
       if(this.fontPX > 1)
       this.fontPX = this.fontPX - 1;
       this.recargarPortada(this.font, this.fontPX);
      }
     masPX(){
      this.fontPX = this.fontPX + 1;
      this.recargarPortada(this.font, this.fontPX);
     }

     recargarPortada(font, fontPX){

      this.cargarFondo(this.portada);
      this.dibujarDilogo(font, fontPX);

     }

     dibujarDilogo(font, fontPX) {

      // this._CONTEXT.lineWidth = 2;
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.font = fontPX + 'px ' + font;
      this._CONTEXT.strokeText(this.nombreaAlumno, 100, 100);
   }

     cargarFondo(escena){

        var img3 = new Image();
        img3.src = escena;
        this._CONTEXT = this._CANVAS.getContext('2d');
        var pat = this._CONTEXT.createPattern(img3, "repeat");
        this._CONTEXT.fillStyle = pat;
        this._CONTEXT.fillRect(0, 0, 400, 500);
        this.portada = img3.src;
     

     }

     initialiseCanvas() {
        if (this._CANVAS.getContext) {
           this.setupCanvas();
  
        }
     }

     setupCanvas() {

      this._CONTEXT = this._CANVAS.getContext('2d');
    
         var img3 = new Image();
         img3.src = '../../assets/imgs/libroprederminado.jpg';
         img3.width = 400;
         img3.height = 500;

         this.clearCanvas();
         this._CONTEXT = this._CANVAS.getContext('2d');
         var pat = this._CONTEXT.createPattern(img3, "repeat");
         this._CONTEXT.fillStyle = pat;
      this._CONTEXT.fillRect(0, 0, 400, 500);


   }
   clearCanvas() {
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      // this.refreshFondo();
   }
  
    }
    
 




