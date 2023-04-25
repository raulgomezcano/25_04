import {nivel} from "./nivel"
export class Curso{
    public _id: number = 0
    public _nombre: string = ""
    public _duracion: number = 0
    public _nivel: nivel
    constructor(id:number, nombre:string, duracion:number, nivel:nivel){
        this._id=id
        this._nombre=nombre
        this._duracion=duracion
        this._nivel=nivel
    }
}