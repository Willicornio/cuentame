import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { grupo } from 'src/app/models/grupo';
import { juegolibro } from 'src/app/models/juegolibro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  idgrupo;
  listajuegolibro: juegolibro[];
  constructor(private peticionesAPI: PeticionesapiService,  private router: Router) { }

  ngOnInit() {

this.obtenergrupos();

  }

  public obtenergrupos() {
    this.idgrupo = localStorage.getItem("idgrupo");
    this.peticionesAPI.getgrupo(this.idgrupo)
      .subscribe(res => {
        console.log(res);

      });
      this.obtenerjuegos();

  }




public obtenerjuegos() {
  
    this.peticionesAPI.getjuegosdelibro(this.idgrupo)
      .subscribe(res => {

         this.listajuegolibro = res;
        console.log(this.listajuegolibro);

       
        


      });

  }

  entrarenjuego(id)
{

  localStorage.setItem("idjuegolibro", id);
  this.router.navigate(['/juegolibro']);



}


}
