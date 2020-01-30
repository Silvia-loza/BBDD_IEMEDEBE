export class Profesional {
    nombre: string;
    edad: number;
    sexo: string;
    peso: number;
    altura: number;
    colorPelo: string;
    colorOjos: string;
    raza: string;
    estaRetirado: boolean;
    nacionalidad: string;
    numeroDeOscars: number;
    profesion: string;

    constructor(nombre: string, edad: number, sexo: string, peso: number, altura: number, colorPelo: string, colorOjos: string, raza: string, estaRetirado: boolean, nacionalidad: string, numeroDeOscars: number, profesion: string){
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

    
    mostrarValor(){
        let conjunto: string = "";
        conjunto = "Las características de " + this.nombre + " son:" + "\n" + "      * Nombre: " + this.nombre + "\n" + "      * Edad: " +
         this.edad + "\n" + "      * Sexo: " + this.sexo + "\n" + "      * Peso: " + this.peso + "\n" + "      * Altura: " + this.altura + 
         "\n" + "      * Color de pelo: " + this.colorPelo + "\n" + "      * Color de ojos: " + this.colorOjos + "\n" + "      * Raza: " + this.raza + 
         "\n" + "      * ¿Está retirado?: " + this.estaRetirado + "\n" + "      * Nacionalidad: " + this.nacionalidad + "\n" +
         "      * Número de Oscars: " + this.numeroDeOscars + "\n" + "      * Profesión: " + this.profesion + "\n";

         console.log(conjunto);
    }
<<<<<<< HEAD

    //cambio de irene

=======
    //Cambio de Jorge
>>>>>>> a92f38aa98fd9a4d958a587ade5ad5f1c6a6db99

}
