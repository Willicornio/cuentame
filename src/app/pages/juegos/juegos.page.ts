import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { grupo } from 'src/app/models/grupo';
import { juegolibro } from 'src/app/models/juegolibro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {


  constructor(private peticionesAPI: PeticionesapiService,  private router: Router) { }
  id: any;
  idalumno;
  listagrupo: grupo[];
  listaidgrupo: number[];
  listajuegolibro: juegolibro[];

  
  ngOnInit() {

    this.obtenergrupos();


  }


  public obtenergrupos() {
    this.idalumno = localStorage.getItem("idAlumno");
    this.peticionesAPI.getGrupoalumno(this.idalumno)
      .subscribe(res => {

        this.listagrupo = res;
        console.log(this.listagrupo);
     

      });

  }


  iragrupo(id)
{

  localStorage.setItem("idgrupo", id);
  this.router.navigate(['/grupo']);



}





}