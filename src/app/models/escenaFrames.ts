export class EscenaFrames{

    fondo: any;
    frames: any;
    duracionFrame: number;
    maximoFrames: number;
    numeroFrames: number;
    numeroframeActual: number;
    numeroEscena: any;
    id: any;
    idLibro: any;
   
    constructor(
        fondo = '',
        duracionFrame =1,
        maximoFrames = 1,
        numeroFrames = 1,
        numeroframeActual = 1,
        numeroEscena = '',

    ) {

     this.fondo = fondo,
     this.duracionFrame = duracionFrame,
     this.maximoFrames = maximoFrames,
     this.numeroFrames = numeroFrames,
     this.numeroframeActual = numeroframeActual,
     this.numeroEscena = numeroEscena
    }
}