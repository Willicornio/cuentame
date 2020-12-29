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
  listaForView: any[] = [];

  constructor(private peticionesAPI: PeticionesapiService, private router: Router) { }

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

        this.listajuegolibro.forEach(element => {
          var gameView = {
            name: '',
            foto: '',
            id: 0
          }

          gameView.id = element.id;
          gameView.name = element.NombreJuego;
          var randomNumber = Math.floor(Math.random() * 14);
          var urlPicture = 'assets/imgs/juego' + randomNumber + '.png';
          gameView.foto = urlPicture;

          this.listaForView.push(gameView);

        });

      });
  }
  entrarenjuego(id) {

    localStorage.setItem("idjuegolibro", id);
    this.router.navigate(['/juegolibro']);



  }


}
