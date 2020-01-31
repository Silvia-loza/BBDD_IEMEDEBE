import {Profesional} from "./profesional"

export class Pelicula{
    titulo: string;
    anyoEstreno: number;
    nacionalidad: string;
    genero : string
    actores: Profesional[];
    director: string;
    guionista: string;
    idioma: string;
    plataforma: string;
    esMCU: boolean;
    nombreProtagonista: string;
    productora: string;
    distribuidora: string;

    constructor(titulo: string, anyoEstreno: number, nacionalidad: string, genero : string) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
        this.genero = genero
    }

    mostrarDatos(){
        let datosPelis: string = "";
        datosPelis = "Las características de " + this.titulo + " son:" + "\n" + "      * Título: " + this.titulo + "\n" + "      * Año de estreno: " +
         this.anyoEstreno + "\n" + "      * Nacionalidad: " + this.nacionalidad + "\n" + "      * Actores: " + "\n" + "           - " + this.actores[0].nombre + 
         "\n" + "           - " + this.actores[1].nombre + "\n" + "           - " + this.actores[2].nombre + "\n" + "      * Director: " + this.director + 
         "\n" + "      * Guionista: " + this.guionista + "\n" + "      * Idioma: " + this.idioma + "\n" + "      * Plataforma: " + this.plataforma + 
         "\n" + "      * ¿Es de Marvel?: " + this.esMCU + "\n" + "      * Protagonista/s: " + this.nombreProtagonista + "\n" +
         "      * Productora: " + this.productora + "\n" + "      * Distribuidora: " + this.distribuidora + "\n";

         console.log(datosPelis);
    }
}


