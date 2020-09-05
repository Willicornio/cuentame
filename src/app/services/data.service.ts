import { Injectable } from '@angular/core';
import { Concurso } from '../models/concurso';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  private dataRecursos = [];
  private dataconcurso: Concurso;


  constructor() { }

setData(id, data){
this.data[id] = data;

}
getData(id){
  return this.data[id];
}


setdataconcurso(id, dataconcurso){

this.dataconcurso[id] = dataconcurso;

}

getdataconcurso(id){

return this.dataconcurso[id];


}

setDataRecursos(id, dataRecursos){
  this.dataRecursos[id] = dataRecursos;
  
  }
  getDataRecursos(id){
    return this.dataRecursos[id];
  }
    
  

}
