import {Profesional} from "./profesional"

export class Pelicula{
    titulo: string;
    anyoEstreno: number;
    nacionalidad: string;
    actores: Profesional[];
    director: string;
    guionista: string;
    idioma: string;
    plataforma: string;
    esMCU: boolean;
    nombreProtagonista: string;
    productora: string;
    distribuidora: string;

    constructor(titulo: string, anyoEstreno: number, nacionalidad: string, actores: Profesional[], director: string, guionista: string, idioma: string, plataforma: string, esMCU: boolean, nombreProtagonista: string, productora: string, distribuidora: string) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
        this.actores = actores;
        this.director = director;
        this.guionista = guionista;
        this.idioma = idioma;
        this.plataforma = plataforma;
        this.esMCU = esMCU;
        this.nombreProtagonista = nombreProtagonista;
        this.productora = productora;
        this.distribuidora = distribuidora;
    }
}


