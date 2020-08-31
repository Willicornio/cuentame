import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  private dataRecursos = [];


  constructor() { }

setData(id, data){
this.data[id] = data;

}
getData(id){
  return this.data[id];
}


setDataRecursos(id, dataRecursos){
  this.dataRecursos[id] = dataRecursos;
  
  }
  getDataRecursos(id){
    return this.dataRecursos[id];
  }
    
  

}
