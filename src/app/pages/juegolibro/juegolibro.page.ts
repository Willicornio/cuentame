import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { juegolibro } from 'src/app/models/juegolibro';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-juegolibro',
  templateUrl: './juegolibro.page.html',
  styleUrls: ['./juegolibro.page.scss'],
})
export class JuegolibroPage implements OnInit {

  constructor(private peticionesAPI: PeticionesapiService) { }
  id;
  NombreJuego: any = '';
  grupoId; any = '';
  listaparticipantes: Alumno[];

  juegodelibro: juegolibro;
  ngOnInit() {

    this.obtenerlibro();
    this.obtenerparticipantes();
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
    this.id = localStorage.getItem("idgrupo");

    this.peticionesAPI.getalumnosgrupo(this.id)

     
      .subscribe((res) => {
        this.listaparticipantes = [];
        console.log(res);
        this.listaparticipantes = res;
        console.log(this.listaparticipantes);



      }, (err) => {
        console.log(err);
      })

  }


}
