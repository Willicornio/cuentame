

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
  

  
  
   
    constructor( 
        autor = '',
        resumen = '',
        titulo = '',
        portada = '',
        numeropag = '',
        idAlumno = '',
        puntuacion = [] ,
        finalizado =''
        

    ) {
        this.autor = autor,
        this.titulo = titulo,
        this.resumen = resumen,
        this.portada = portada,
        this.numeropag = numeropag,
        this.idAlumno = idAlumno,
        this.puntuacion = puntuacion,
        this.finalizado = finalizado



    }
}