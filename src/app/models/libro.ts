export class Libro{

         
    autor: any;
    resumen: any;
    portada: any;
    numeropag: any;
    listaescenas: any;
  
   
    constructor(
              
        autor = '',
        resumen = '',
        portada = '',
        numeropag: '',
        listaescenas: []

        

    ) {
        this.autor = autor,
        this.resumen = resumen,
        this.portada = portada,
        this.numeropag = numeropag,
        this.listaescenas = listaescenas



    }
}