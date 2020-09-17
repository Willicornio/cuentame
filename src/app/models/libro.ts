

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
    criteriototal: any;
    listavotantesconcurso: any;
    inscrito: any;
    puntostotalesc1:any;
    puntostotalesc2:any;
    puntostotalesc3:any;
   

    constructor( 
        autor = '',
        resumen = '',
        titulo = '',
        portada = '',
        numeropag = '',
        idAlumno = '',
        puntuacion = [],
        finalizado ='',
        listavotantes = [],
        listavotantesconcurso = [],
        inscrito = '',
        criterio1 = '',
        criterio2 = '',
        criterio3 = '',
        criteriototal = ''

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
        this.inscrito = inscrito,
        this.criterio1 = criterio1,
        this.criterio2 = criterio2,
        this.criterio3 = criterio3,
        this.criteriototal = criteriototal


    }
}