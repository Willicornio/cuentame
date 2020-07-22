export class EscenaFrames{

    fondo: any;
    frames: any;
    duracionFrame: any;
    maximoFrames: any;
    numeroFrames: any;
    numeroframeActual: any;
    numeroEscena: any;
    id: any;
    idLibro: any;
   
    constructor(
        fondo = '',
        frames = [],
        duracionFrame ='',
        maximoFrames = 1,
        numeroFrames = 1,
        numeroframeActual = 1,
        numeroEscena = '',

    ) {

     this.fondo = fondo,
     this.frames = frames,
     this.duracionFrame = duracionFrame,
     this.maximoFrames = maximoFrames,
     this.numeroFrames = numeroFrames,
     this.numeroframeActual = numeroframeActual,
     this.numeroEscena = numeroEscena
    }
}