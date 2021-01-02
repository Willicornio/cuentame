import { Injectable } from '@angular/core';
import { Concurso } from '../models/concurso';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  private dataRecursos = [];

  private dataconcurso: Concurso = new Concurso;

  constructor() { }

setData(id, data){
this.data[id] = data;

}
getData(id){
  return this.data[id];
}


setdataconcurso(dataconcurso){

this.dataconcurso = dataconcurso;

}

getdataconcurso(){

return this.dataconcurso;


}

setDataRecursos(id, dataRecursos){
  this.dataRecursos[id] = dataRecursos;
  
  }
  getDataRecursos(id){
    return this.dataRecursos[id];
  }
    
  

}
