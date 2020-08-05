import { Component, OnInit } from '@angular/core';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { Libro } from 'src/app/models/libro';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-todoslibros',
  templateUrl: './todoslibros.page.html',
  styleUrls: ['./todoslibros.page.scss'],
})
export class TodoslibrosPage implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  listalibros: Libro[] = [];
  searchTerm: string = '';
  listaLibrosApi: Libro[] = [];
  tipo : any = "ninguno";
  hiddenSearchTitulo: boolean = false;
  hiddenSearchAutor: boolean = false;
  media: [];

  searchbar = document.querySelector('ion-searchbar');


  constructor(private peticionesAPI: PeticionesapiService, private dataService: DataService) { }

  ngOnInit() {
    this.getlibros();
  }

  // onRateChange(event) {
  //   console.log('Your rate:', event);
  // }

  ionViewDidLoad() {
    this.setFilteredItems(this.tipo);
  }

  getlibros() {

    this.peticionesAPI.Damelistalibrosclase()
      .subscribe(res => {

        res.forEach(element => {

          this.listalibros.push(element);          

          this.listaLibrosApi.push(element);
   
        })


      });
  }







  onChange(value) {
    console.log(value);
    if (value == "titulo")
    {
      this.hiddenSearchTitulo = true;
      this.hiddenSearchAutor = false;
      this.tipo = "titulo";
    }
    else if (value == "autor"){
      this.hiddenSearchTitulo = false;
      this.hiddenSearchAutor = true;
      this.tipo = "autor";

    }
    else if(value == "puntos"){
      this.hiddenSearchTitulo = false;
      this.hiddenSearchAutor = false;
      this.tipo = "puntos";
      this.ordenarPorPuntuacion();
    }
  }

  ordenarPorPuntuacion()
  {

    
  }
  setFilteredItems(tipo) {

    if (tipo == "titulo") {
      this.listalibros = this.filterItemsTitulo(this.searchTerm);

    }
    else if (tipo == "autor"){
      this.listalibros = this.filterItemsAutor(this.searchTerm);

    }

  
  }

  filterItemsTitulo(searchTerm) {
    if (searchTerm == "") {
      this.listalibros = this.listaLibrosApi;

    }
    else {
      this.listalibros = this.listaLibrosApi;
      return this.listalibros.filter((item) => {
        return item.titulo.toLowerCase().indexOf(
          searchTerm.toLowerCase()) > -1;
      });
    }
  }

  filterItemsAutor(searchTerm) {
    if (searchTerm == "") {
      this.listalibros = this.listaLibrosApi;

    }
    else {
      this.listalibros = this.listaLibrosApi;
      return this.listalibros.filter((item) => {
        return item.autor.toLowerCase().indexOf(
          searchTerm.toLowerCase()) > -1;
      });
    }
  }

  verlibro(libro) { }
}