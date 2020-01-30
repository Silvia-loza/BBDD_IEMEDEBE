import {Profesional} from "./profesional"
import {Pelicula} from "./pelicula"
import {Iemedebe} from "./iemedebe"

let profe1: Profesional = new Profesional("Johnny Depp", 57, "hombre", 75, 178, "castaño", "marrón", "gitanito", false, "americano", 0, "actor");
let profe2: Profesional = new Profesional("Pedro Almodóvar", 70, "hombre", 85, 168, "blanco", "negro", "blanquito", false, "español", 2, "director");
let profe3: Profesional = new Profesional("Nicole Kidman", 52, "mujer", 65, 180, "pelirrojo", "azul", "blanquita", false, "australiana", 1, "actriz");
let profe4: Profesional = new Profesional("Peter Jackson", 58, "hombre", 90, 169, "gris", "marrón", "blanco", false, "neozelandés", 3, "director");
let profe5: Profesional = new Profesional("Will Smith", 51, "hombre", 75, 188, "negro", "negro", "negro", false, "americano", 0, "actor");
let profe6: Profesional = new Profesional("Angelina Jolie", 44, "mujer", 65, 169, "moreno", "verdes", "blanca", false, "americano", 0, "actriz");
let profe7: Profesional = new Profesional("Emma Watson", 29, "mujer", 58, 165, "rubio", "marrón", "blanquita", false, "británica", 0, "actriz");
let profe8: Profesional = new Profesional("Stanley Kubrick", 70, "hombre", 75, 170, "negro", "marrón", "morenito", true, "americano", 1, "director");
let profe9: Profesional = new Profesional("Emmanuel Lubezki", 55, "hombre", 70, 172, "calvo", "negros", "morenito", false, "mexicano", 3, "fotografía");
let profe10: Profesional = new Profesional("John Williams", 87, "hombre", 85, 182, "blanco", "marrón", "blanco", true, "americano", 5, "compositor");

let actores1: Profesional[] = [profe1, profe3, profe5];
let actores2: Profesional[] = [profe5, profe7, profe1];
let actores3: Profesional[] = [profe7, profe3, profe6];




let peli1: Pelicula = new Pelicula("Titanic", 1997, "estadounidense", actores1, "James Cameron", "James Cameron", "inglés", "cine", false, "Jack y Rose", "Universal", "Universal");
let peli2: Pelicula = new Pelicula("El Padrino", 1972, "estadounidense", actores2, "Francis Ford Coppola", "Mario Puzo", "italiano", "cine", false, "Vitto Corleone", "Warner", "Warner");
let peli3: Pelicula = new Pelicula("El Bar", 2017, "española", actores3, "Alex de la Iglesia", "Antonio Pérez", "español", "televisión", false, "Manola", "Atresmedia", "Atresmedia");
let peli4: Pelicula = new Pelicula("Toy Story", 1995, "estadounidense", actores1, "John Lasseter", "Joel Cohen", "inglés", "cine", false, "Woody y Buzz", "Pixar", "Disney");
let peli5: Pelicula = new Pelicula("Los lunes al sol", 2002, "española", actores2, "Fernando León", "Ignacio del Moral", "español", "cine", false, "José Suárez", "Paramount", "Paramount");
let peli6: Pelicula = new Pelicula("Bienvenidos al Norte", 2008, "francesa", actores3, "Dani Boon", "Antonio Pérez", "frnacés", "cine", false, "Philippe", "Pathé", "Pathé");
let peli7: Pelicula = new Pelicula("La naranja mecánica", 1971, "británica", actores1, "Stanley Kubrick", "Stanley Kubrick", "inglés", "cine", false, "Alex", "Warner", "Warner");
let peli8: Pelicula = new Pelicula("Up", 2009, "estadounidense", actores2, "Pete Docter", "Bob Peterson", "inglés", "cine", false, "Carl", "Disney", "Disney");
let peli9: Pelicula = new Pelicula("La Ola", 2008, "alemana", actores3, "Dennis Gansel", "Dennis Gansel", "alemán", "internet", false, "Rainer", "Rat Pack", "Constantin Film");
let peli10: Pelicula = new Pelicula("Amélie", 2001, "francesa", actores1, "Jean-Pierre Jeunet", "Guillaume Laurant", "francés", "cine", false, "Amélie", "Union", "Fox");



let ieme1: Iemedebe = new Iemedebe([peli3, peli5, peli7, peli10]);


/*profe1.mostrarValor();
profe2.mostrarValor();
profe3.mostrarValor();
profe4.mostrarValor();
profe5.mostrarValor();
profe6.mostrarValor();
profe7.mostrarValor();
profe8.mostrarValor();
profe9.mostrarValor();
profe10.mostrarValor();


peli1.mostrarDatos();
peli2.mostrarDatos();
peli3.mostrarDatos();
peli4.mostrarDatos();
peli5.mostrarDatos();
peli6.mostrarDatos();
peli7.mostrarDatos();
peli8.mostrarDatos();
peli9.mostrarDatos();
peli10.mostrarDatos();


console.log(ieme1)*/

var myJson = JSON.stringify(ieme1)

var fs = require('fs');
fs.writeFile("imdbBBDD.json", myJson, function(err, result) {
    if(err) console.log('error', err);
})
