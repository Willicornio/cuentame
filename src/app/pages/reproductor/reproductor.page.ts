import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
    slideOpts = {
    initialSlide: 1,
    speed: 400  
  };
  
  constructor() { }

  ngOnInit() {
  }

}
