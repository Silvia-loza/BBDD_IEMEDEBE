"use strict";
exports.__esModule = true;
var Profesional = /** @class */ (function () {
    function Profesional(nombre, edad, sexo, peso, altura, colorPelo, colorOjos, raza, estaRetirado, nacionalidad, numeroDeOscars, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.colorPelo = colorPelo;
        this.colorOjos = colorOjos;
        this.raza = raza;
        this.estaRetirado = estaRetirado;
        this.nacionalidad = nacionalidad;
        this.numeroDeOscars = numeroDeOscars;
        this.profesion = profesion;
    }
    Profesional.prototype.mostrarValor = function () {
        var conjunto = "";
        conjunto = "Las características de " + this.nombre + " son:" + "\n" + "      * Nombre: " + this.nombre + "\n" + "      * Edad: " +
            this.edad + "\n" + "      * Sexo: " + this.sexo + "\n" + "      * Peso: " + this.peso + "\n" + "      * Altura: " + this.altura +
            "\n" + "      * Color de pelo: " + this.colorPelo + "\n" + "      * Color de ojos: " + this.colorOjos + "\n" + "      * Raza: " + this.raza +
            "\n" + "      * ¿Está retirado?: " + this.estaRetirado + "\n" + "      * Nacionalidad: " + this.nacionalidad + "\n" +
            "      * Número de Oscars: " + this.numeroDeOscars + "\n" + "      * Profesión: " + this.profesion + "\n";
        console.log(conjunto);
    };
    return Profesional;
}());
exports.Profesional = Profesional;
