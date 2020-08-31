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

    constructor(
    
        NombreJuego = '' ,
        Tipo= '' ,
        Modo= '' ,
        JuegoActivo= '' ,
        Familias= '' ,
        Temporada= '' ,
        grupoId= '' ,
        descripcion= '' ,
        juegolibroid= '' 
    

    ) {

        this.NombreJuego = NombreJuego;
        this.Familias = Familias;
        this.descripcion = descripcion;
     
    }
}