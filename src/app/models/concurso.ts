export class Concurso{

    concursoTematica: string;
    dateFinInscripcion: any;
    dateFinVotacion: any;
    concursoRequisitos: string;
    concursoPrimerCriterio: string;
    concursoSegundoCriterio: string;
    concursoTercerCriterio:string
    listaLibrosParticipantes: [];
    peso1: number;
    peso2: number;
    peso3: number;
    acabado: any;
    primerpuesto: any;
    segundopuesto: any;
    tercerpuesto: any;

    
   
    constructor(
        concursoTematica = '',
        concursoRequisitos = '',
        concursoPrimerCriterio = '',
        concursoSegundoCriterio = '',
        concursoTercerCriterio = ''

    ) {

   
        this.concursoTematica = concursoTematica;
        this.concursoRequisitos = concursoRequisitos;
        this.concursoPrimerCriterio = concursoPrimerCriterio;
        this.concursoSegundoCriterio = concursoSegundoCriterio;
        this.concursoTercerCriterio = concursoTercerCriterio;
      
        
    }
}