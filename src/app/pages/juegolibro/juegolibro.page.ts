import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { juegolibro } from 'src/app/models/juegolibro';
import { Alumno } from 'src/app/models/alumno';
import { Concurso } from 'src/app/models/concurso';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-juegolibro',
  templateUrl: './juegolibro.page.html',
  styleUrls: ['./juegolibro.page.scss'],
})
export class JuegolibroPage implements OnInit {

  constructor(private router: Router, private peticionesAPI: PeticionesapiService, public alertController: AlertController) { }
  id;
  idg;
  nivel1: any = '';
  nivel2: any = '';
  nivel3: any = '';
  idconcurso;
  NombreJuego: any = '';
  grupoId: any = '';
  listaparticipantes: Alumno[];
  concurso: any;
  concursoRequisitos;
  concursoPrimerCriterio;
  concursoSegundoCriterio;
  concursoTematica;
  concursoTercerCriterio;
  dateFinInscripcion;
  dateFinVotacion;
  muestrame = false;
  muestraer = false;
  juegodelibro: juegolibro;
  listalibros;
  date;
  diafrontera = false;
  aunhaytiempo = false;
  idalumno;
  idalumnojuegodelibro;
  descripcion;
  listainscripcipnes = [];
  juegoAlumnoLibro: any;
  criterioprivilegio1: any = '';
  criterioprivilegio2: any = '';
  criterioprivilegio3: any = '';
  muestracriterio3 = false;
  muestracriterio2 = false;
  muestracriterio1 = false;

  hayLibro: any = false;
  idLibro: any;

  ngOnInit() {

    this.obtenerlibro();
    this.obtenerparticipantes();
    this.obtenerconcurso();
    this.muestraer = false;
    this.obtenerJuegoAlumnoLibro();



  }

  public obtenerlibro() {
    this.id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getjuedolibro(this.id)
      .subscribe((res) => {
        console.log(res);
        this.juegodelibro = res;
        this.NombreJuego = res.NombreJuego;
        this.grupoId = res.grupoId;
        this.descripcion = res.descripcion;
        this.criterioprivilegio1 = res.criterioprivilegio1;
        this.criterioprivilegio2 = res.criterioprivilegio2;
        this.criterioprivilegio3 = res.criterioprivilegio3;


      }, (err) => {
        console.log(err);
      })






    /////////aaaaaaaaa/////////

  }



  obtenerJuegoAlumnoLibro() {

    this.id = localStorage.getItem("idjuegolibro");

    this.idalumno = localStorage.getItem("idAlumno");

    this.peticionesAPI.obtenerAlumnosJuegoLibro(this.id)
      .subscribe((res) => {
        res.forEach(element => {
          if (element.alumnoID == this.idalumno) {

            localStorage.setItem('idalumnojuego', element.id)
            this.nivel1 = element.nivel1;
            this.nivel2 = element.nivel2;
            this.nivel3 = element.nivel3;
            this.anunciarcriteriosprivilgios();
            this.getLibro()
          }
        });
      }, (err) => {

      })

  }

  getLibro() {

    var id = localStorage.getItem('idalumnojuego');
    this.peticionesAPI.getLibroAlumnoJuego(id)
      .subscribe((res) => {
        if (res.length == 0) {
          this.hayLibro = false;
        }

        else if (res.length != 0) {
          this.hayLibro = true;
          this.idLibro = res[0].id;
        }
      }, (err) => {

      })
  }

  anunciarcriteriosprivilgios() {

    if (this.nivel3 == false)
      this.muestracriterio3 = true;
    if (this.nivel2 == false)
      this.muestracriterio2 = true;
    if (this.nivel3 == false)
      this.muestracriterio3 = true;


  }


  obtenerLibroAlumnoJuego() {

    var ida = localStorage.getItem('idalumnojuego');
    this.peticionesAPI.getLibroAlumnoJuego(ida)


      .subscribe((res) => {


      }, (err) => {
        console.log(err);
      })



  }



  public obtenerparticipantes() {
    this.idg = localStorage.getItem("idgrupo");

    this.peticionesAPI.getalumnosgrupo(this.idg)


      .subscribe((res) => {
        this.listaparticipantes = [];
        console.log(res);
        this.listaparticipantes = res;
        console.log(this.listaparticipantes);



      }, (err) => {
        console.log(err);
      })

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
          this.concursoPrimerCriterio = cosa.concursoPrimerCriterio;
          this.concursoRequisitos = cosa.concursoRequisitos;
          this.concursoSegundoCriterio = cosa.concursoSegundoCriterio;
          this.concursoTercerCriterio = cosa.concursoTercerCriterio;
          this.dateFinVotacion = cosa.dateFinVotacion;
          this.dateFinVotacion = this.dateFinVotacion.toString().split('T');
          this.dateFinVotacion = this.dateFinVotacion[0];
          this.dateFinInscripcion = cosa.dateFinInscripcion;
          this.dateFinInscripcion = this.dateFinInscripcion.toString().split('T');
          this.dateFinInscripcion = this.dateFinInscripcion[0];
          this.concursoTematica = cosa.concursoTematica;
          this.listainscripcipnes = cosa.listainscripcipnes;
          this.muestra();

          this.obtenerfecha();
        })
      }, (err) => {
        this.muestraerror();

      })

  }

  public muestra() {
    this.muestrame = true;


  }

  public muestraerror() {

    this.muestraer = true;

  }


  public inscribirlibro() {


    var ida = localStorage.getItem('idalumnojuego');
    this.peticionesAPI.getLibroAlumnoJuego(ida)


      .subscribe((res) => {

        var idlibro = res[0].id;
        var finalizado = res[0].finalizado;

        if (res != null) {

          if (finalizado == true) {

            this.listainscripcipnes.push(res);

            this.alertinscribir();
          }



          if (finalizado == false) {

            this.alertnoestafinalizado();
          }


        }


      }, (err) => {
        this.alertcrealibro();
      })



    // 

    // i esta finalzado 


    //if no hay libro




  }

  async alertinscribir() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INSCRIBIR CUENTO',
      subHeader: '¿Estas seguro de querer inscribir tu cuento?',
      message: ' Una vez inscrito no podras modificarlo.',
      buttons: ['Aceptar', 'Cancelar']
    });

    await alert.present();
  }

  async alertnoestafinalizado() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Inscipción no realizada',
      subHeader: 'Cuento no finalizado',
      message: 'Por favor acaba el cuento antes de participar en el concurso',
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  async alertcrealibro() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Inscipción no realizada',
      subHeader: 'Has de crear y finalizar el cuento antes de inscribir',
      message: 'Por favor  crea el cuento antes de participar en el concurso',
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  public irACrearLibro() {

    this.router.navigate(['/libro']);

  }

   irALibro()
  {
    this.router.navigate(["listaescenas/" + this.idLibro]);

  }

  public iravotaciones() {

    localStorage.setItem("idconcurso", this.idconcurso);
    this.router.navigate(['/votacionesconcurso']);

  }



  obtenerfecha() {
    this.date = new Date().toISOString();
    this.date = this.date.toString().split('T');
    this.date = this.date[0];
    console.log(this.date);

    if (this.date >= this.dateFinInscripcion) {
      this.diafrontera = true;

    }
    else
      this.aunhaytiempo = true;


  }

}