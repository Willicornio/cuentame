

export class Libro{

         
    autor: any;
    resumen: any;
    portada: any;
    titulo:any;
    numeropag: any;
    idAlumno: any;
    puntuacion: any;
    finalizado: any;
    id: any;
    mediaPuntuacion: any;
    listavotantes: any;
  

  
  
   
    constructor( 
        autor = '',
        resumen = '',
        titulo = '',
        portada = '',
        numeropag = '',
        idAlumno = '',
        puntuacion = [] ,
        finalizado ='',
        listavotantes = []
    ) {
        this.autor = autor,
        this.titulo = titulo,
        this.resumen = resumen,
        this.portada = portada,
        this.numeropag = numeropag,
        this.idAlumno = idAlumno,
        this.puntuacion = puntuacion,
        this.finalizado = finalizado,
        this.listavotantes = listavotantes


    }
}