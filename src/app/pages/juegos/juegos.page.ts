import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { grupo } from 'src/app/models/grupo';
import { juegolibro } from 'src/app/models/juegolibro';
@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {


  constructor(private peticionesAPI: PeticionesapiService) { }
  id: any;
  idalumno;
  listagrupo: grupo[];
  listaidgrupo: number[];
  listajuegolibro: juegolibro[];
  
  ngOnInit() {

    this.obtenergrupos();


  }


  //Primero obtenemos los grupos a los que pertenece el alumno//

  public obtenergrupos() {
    this.idalumno = localStorage.getItem("idAlumno");
    this.peticionesAPI.getGrupoalumno(this.idalumno)
      .subscribe(res => {

        this.listaidgrupo = [];
        this.listagrupo = res;
        console.log(this.listagrupo);

        res.forEach(grupo => {

          this.listaidgrupo.push(grupo.id);
        });

        
    this.obtenerjuegos();

      });

  }


  //Segundo  obtenemos los juegos de libro que tiene cada uno de los grupos a los que pertenece un alumno//

public obtenerjuegos()
{

this.listaidgrupo.forEach(element => {
  this.listajuegolibro = [];
  this.peticionesAPI.getjuegosdelibro(element)
  .subscribe(res => {

    this.listajuegolibro.push(res);
    console.log(this.listajuegolibro);

  }, (err) => {
    console.log(err);
  })

});

}



}