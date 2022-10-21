import {Curso} from './curso.js';

export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}

//El export permite que la clase sea visible desde otros archivos
export class Aprendiz{
    /*Curso es un arreglo por eso se define en el constructor []*/ 
    constructor(public nombres: string, public apellidos:string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo , public cursos: Curso[])
    {

    }
    public darCursosCertificados():number{
        let totalCursosC:number = 0;

        for(let index = 0; index < this.cursos.length; index++){
            let curso: Curso = this.cursos[index];
            if(curso.certificado){
                totalCursosC+=1;
            }
        }

        return totalCursosC;

    }
}