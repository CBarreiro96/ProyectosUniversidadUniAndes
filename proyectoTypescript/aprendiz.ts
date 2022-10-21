export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}

//El export permite que la clase sea visible desde otros archivos
export class Aprendiz{
    constructor(public nombres: string, public apellidos:string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo )
    {

    }
}