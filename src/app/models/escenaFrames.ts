import { url } from 'inspector';

export class EscenaFrames{

    fondo: any;
    frames: any;
    duracionFrame: number;
    maximoFrames: number;
    numeroFrames: number;
    numeroframeActual: number;
    numeroEscena: any;
    tipoAudio: any;
    urlAudioFondo: any;
    id: any;
    idLibro: any;
   
    constructor(
        fondo = '',
        duracionFrame =1,
        maximoFrames = 1,
        numeroFrames = 1,
        numeroframeActual = 1,
        numeroEscena = '',
        tipoAudio= '',
        urlAudioFondo= ''

    ) {

     this.fondo = fondo,
     this.duracionFrame = duracionFrame,
     this.maximoFrames = maximoFrames,
     this.numeroFrames = numeroFrames,
     this.numeroframeActual = numeroframeActual,
     this.numeroEscena = numeroEscena,
     this.tipoAudio = tipoAudio,
     this.urlAudioFondo = urlAudioFondo
    }
}