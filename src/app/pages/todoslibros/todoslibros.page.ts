import { Component, OnInit } from '@angular/core';
import {PeticionesapiService} from '../../services/peticionesapi.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-todoslibros',
  templateUrl: './todoslibros.page.html',
  styleUrls: ['./todoslibros.page.scss'],
})
export class TodoslibrosPage implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  listalibros: Libro[] = [];
  constructor(private peticionesAPI: PeticionesapiService) { }

  ngOnInit() {
    this.getlibros();
  }

  // onRateChange(event) {
  //   console.log('Your rate:', event);
  // }

  
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