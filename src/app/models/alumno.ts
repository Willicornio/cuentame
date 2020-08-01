export class Alumno{

    Nombre: string;
    PrimerApellido: string;
    SegundoApellido: string;
    ImagenPerfil: string;
    profesorId: string;
    id: number;
  
  
   
    constructor(
        nombre = '',
        primerApellido = '',
        segundoApellido = '',
        imagenPerfil = ''
        

    ) {

   
        this.Nombre = nombre;
        this.PrimerApellido = primerApellido;
        this.SegundoApellido = segundoApellido;
        this.ImagenPerfil = imagenPerfil;
    }
}