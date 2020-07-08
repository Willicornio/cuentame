export class EscenaFrames{

    fondo: any;
    frames: any;
    duracionFrame: any;
    maximoFrames: any;
    numeroFrames: any;
   
    constructor(
        fondo = '',
        frames = [],
        duracionFrame ='',
        maximoFrames = 1,
        numeroFrames = 1

    ) {

     this.fondo = fondo,
     this.frames = frames,
     this.duracionFrame = duracionFrame,
     this.maximoFrames = maximoFrames,
     this.numeroFrames = numeroFrames

    }
}