import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { juegolibro } from 'src/app/models/juegolibro';
import { Alumno } from 'src/app/models/alumno';
import { Concurso } from 'src/app/models/concurso';

@Component({
  selector: 'app-juegolibro',
  templateUrl: './juegolibro.page.html',
  styleUrls: ['./juegolibro.page.scss'],
})
export class JuegolibroPage implements OnInit {

  constructor(private peticionesAPI: PeticionesapiService) { }
  id;
  idg;
  NombreJuego: any = '';
  grupoId; any = '';
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
  ngOnInit() {

    this.obtenerlibro();
    this.obtenerparticipantes();
    this.obtenerconcurso();
    this.muestraer = false;
  }

  public obtenerlibro() {
    this.id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getjuedolibro(this.id)
      .subscribe((res) => {
        console.log(res);
        this.juegodelibro = res;
        this.NombreJuego = res.NombreJuego;
        this.grupoId = res.grupoId;

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


  public obtenerconcurso(){
    this.id = localStorage.getItem("idjuegolibro");

    this.peticionesAPI.getconcurso(this.id)

    .subscribe((res) => {

      this.concurso = res;
      console.log(res);
      console.log(res);

      this.concurso.forEach(cosa => {
 
      this.concursoPrimerCriterio  = cosa.concursoPrimerCriterio;
      this.concursoRequisitos  = cosa.concursoRequisitos;
      this.concursoSegundoCriterio = cosa.concursoSegundoCriterio;
      this.concursoTercerCriterio = cosa.concursoTercerCriterio;
      this.dateFinVotacion = cosa.dateFinVotacion;
      this.dateFinInscripcion = cosa.dateFinInscripcion;
      this.concursoTematica = cosa.concursoTematica;
      this.muestra();
    })
    }, (err) => {
        this.muestraerror();

    })


  }

public muestra(){
  this.muestrame = true;


}

public muestraerror(){

this.muestraer = true;

}


}
