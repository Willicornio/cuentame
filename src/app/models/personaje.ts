export class Personaje {


    id: any;
    foto: any;
    tiempoEntrada: any;
    tiempoSalida: any;
    positionX: any;
    positionY: any;
    positionEnImagenX: any;
    positionEnImagenY: any;
    ancho: any;
    alto: any;
    pintado: any;



    constructor(
        id = '',
        foto = '',
        tiempoEntrada = '',
        tiempoSalida = '',
        positionX = '',
        positionY = '',
        pintado = false,
        positionEnImagenX = '',
        positionEnImagenY = '',
        ancho = '',
        alto = ''

    ) {

        this.id = id,
            this.foto = foto,
            this.tiempoEntrada = tiempoEntrada,
            this.tiempoSalida = tiempoSalida,
            this.positionX = positionX,
            this.positionY = positionY
            this.pintado = pintado,
            this.positionEnImagenX = positionEnImagenX,
            this.positionEnImagenY = positionEnImagenY,
            this.ancho = ancho,
            this.alto = alto

    }
}