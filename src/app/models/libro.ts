

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
    criterio1: any;
    criterio2: any;
    criterio3: any;
    listavotantesconcurso: any;
    inscrito: any;
   
    constructor( 
        autor = '',
        resumen = '',
        titulo = '',
        portada = '',
        numeropag = '',
        idAlumno = '',
        puntuacion = [] ,
        finalizado ='',
        listavotantes = [],
        listavotantesconcurso = [],
        incrito = '',
        criterio1 = '',
        criterio2 = '',
        criterio3 = ''

    ) {
        this.autor = autor,
        this.titulo = titulo,
        this.resumen = resumen,
        this.portada = portada,
        this.numeropag = numeropag,
        this.idAlumno = idAlumno,
        this.puntuacion = puntuacion,
        this.finalizado = finalizado,
        this.listavotantes = listavotantes,
        this.listavotantesconcurso = listavotantesconcurso,
        this.inscrito = this.inscrito,
        this.criterio1 = this.criterio1,
        this.criterio2 = this.criterio2,
        this.criterio3 = this.criterio3


    }
}