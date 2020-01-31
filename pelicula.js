"use strict";
exports.__esModule = true;
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, anyoEstreno, nacionalidad, genero) {
        this.titulo = titulo;
        this.anyoEstreno = anyoEstreno;
        this.nacionalidad = nacionalidad;
        this.genero = genero;
    }
    Pelicula.prototype.mostrarDatos = function () {
        var datosPelis = "";
        datosPelis = "Las características de " + this.titulo + " son:" + "\n" + "      * Título: " + this.titulo + "\n" + "      * Año de estreno: " +
            this.anyoEstreno + "\n" + "      * Nacionalidad: " + this.nacionalidad + "\n" + "      * Actores: " + "\n" + "           - " + this.actores[0].nombre +
            "\n" + "           - " + this.actores[1].nombre + "\n" + "           - " + this.actores[2].nombre + "\n" + "      * Director: " + this.director +
            "\n" + "      * Guionista: " + this.guionista + "\n" + "      * Idioma: " + this.idioma + "\n" + "      * Plataforma: " + this.plataforma +
            "\n" + "      * ¿Es de Marvel?: " + this.esMCU + "\n" + "      * Protagonista/s: " + this.nombreProtagonista + "\n" +
            "      * Productora: " + this.productora + "\n" + "      * Distribuidora: " + this.distribuidora + "\n";
        console.log(datosPelis);
    };
    return Pelicula;
}());
exports.Pelicula = Pelicula;
