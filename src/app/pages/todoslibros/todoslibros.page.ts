import { Component, OnInit } from '@angular/core';
import {PeticionesapiService} from '../../services/peticionesapi.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-todoslibros',
  templateUrl: './todoslibros.page.html',
  styleUrls: ['./todoslibros.page.scss'],
})
export class TodoslibrosPage implements OnInit {

  listalibros: Libro[] = [];
  constructor(private peticionesAPI: PeticionesapiService) { }

  ngOnInit() {
    this.getlibros();
  }

  
  getlibros(){
  
    this.peticionesAPI.Damelistalibrosclase()
    .subscribe(res => {
     
      res.forEach(element => {

        this.listalibros.push(element);
      })

    
    });
  

   }
verlibro(libro) {}
}