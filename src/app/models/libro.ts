export class Libro{

         
    autor: any;
    resumen: any;
    portada: any;
    titulo:any;
    listaescenas: any;
    numeropag: any;
  
  
   
    constructor(
              
        autor = '',
        resumen = '',
        titulo = '',
        portada = '',
        listaescenas= [],
        numeropag = ''
        

    ) {
        this.autor = autor,
        this.titulo = titulo,
        this.resumen = resumen,
        this.portada = portada,
        this.listaescenas = listaescenas,
        this.numeropag = numeropag




    }
}