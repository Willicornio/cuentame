
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router) { }
  ngOnInit() {




  }


  irainiciolibro(){

    this.router.navigate(['/iniciolibro'])
  }
  salir()
  {
     this.router.navigate(["login"]);
  }

  iramisjuegos(){

    this.router.navigate(['/juegos'])
  }



}
