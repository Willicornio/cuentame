export class Frame{
         
    personajes: any;
    textos: any;
    portadaFrame: any;
    numero: any;
   
    constructor(
        portadaFrame = '',
        personajes = [],
        textos = [],
        numero = ''

    ) {

     this.personajes = personajes,
     this.textos = textos,
     this.portadaFrame = portadaFrame,
     this.numero = numero

    }
}