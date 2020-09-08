export class juegolibro{

    NombreJuego: string;
    Tipo: string;
    Modo: string;
    JuegoActivo: boolean;
    Familias:any;
    Temporada:any;
    grupoId: number;
    descripcion: string;
    juegolibroid: number;
    id;
    criterioprivilegio1: string;
    criterioprivilegio2: string;
    criterioprivilegio3: string;

    constructor(
    
        NombreJuego = '' ,
        Tipo= '' ,
        Modo= '' ,
        JuegoActivo= '' ,
        Familias= '' ,
        Temporada= '' ,
        grupoId= '' ,
        descripcion= '' ,
        juegolibroid= '' ,
        criterioprivilegio1= '' ,
        criterioprivilegio2= '' ,
        criterioprivilegio3= '' 
    

    ) {

        this.NombreJuego = NombreJuego;
        this.Familias = Familias;
        this.descripcion = descripcion;
        this.criterioprivilegio1 =criterioprivilegio1;
        this.criterioprivilegio2 =criterioprivilegio2;
        this.criterioprivilegio3 =criterioprivilegio3;
    }
}