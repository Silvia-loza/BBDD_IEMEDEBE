"use strict";
exports.__esModule = true;
var profesional_1 = require("./profesional");
var pelicula_1 = require("./pelicula");
var iemedebe_1 = require("./iemedebe");
var profe1 = new profesional_1.Profesional("Johnny Depp", 57, "hombre", 75, 178, "castaño", "marrón", "gitanito", false, "americano", 0, "actor");
var profe2 = new profesional_1.Profesional("Pedro Almodóvar", 70, "hombre", 85, 168, "blanco", "negro", "blanquito", false, "español", 2, "director");
var profe3 = new profesional_1.Profesional("Nicole Kidman", 52, "mujer", 65, 180, "pelirrojo", "azul", "blanquita", false, "australiana", 1, "actriz");
var profe4 = new profesional_1.Profesional("Peter Jackson", 58, "hombre", 90, 169, "gris", "marrón", "blanco", false, "neozelandés", 3, "director");
var profe5 = new profesional_1.Profesional("Will Smith", 51, "hombre", 75, 188, "negro", "negro", "negro", false, "americano", 0, "actor");
var profe6 = new profesional_1.Profesional("Angelina Jolie", 44, "mujer", 65, 169, "moreno", "verdes", "blanca", false, "americano", 0, "actriz");
var profe7 = new profesional_1.Profesional("Emma Watson", 29, "mujer", 58, 165, "rubio", "marrón", "blanquita", false, "británica", 0, "actriz");
var profe8 = new profesional_1.Profesional("Stanley Kubrick", 70, "hombre", 75, 170, "negro", "marrón", "morenito", true, "americano", 1, "director");
var profe9 = new profesional_1.Profesional("Emmanuel Lubezki", 55, "hombre", 70, 172, "calvo", "negros", "morenito", false, "mexicano", 3, "fotografía");
var profe10 = new profesional_1.Profesional("John Williams", 87, "hombre", 85, 182, "blanco", "marrón", "blanco", true, "americano", 5, "compositor");
var actores1 = [profe1, profe3, profe5];
var actores2 = [profe5, profe7, profe1];
var actores3 = [profe7, profe3, profe6];
var peli1 = new pelicula_1.Pelicula("Titanic", 1997, "estadounidense", "drama");
var peli2 = new pelicula_1.Pelicula("El Padrino", 1972, "estadounidense", "drama");
var peli3 = new pelicula_1.Pelicula("El Bar", 2017, "española", "comedia");
var peli4 = new pelicula_1.Pelicula("Toy Story", 1995, "estadounidense", "comedia");
var peli5 = new pelicula_1.Pelicula("Los lunes al sol", 2002, "española", "drama");
var peli6 = new pelicula_1.Pelicula("Bienvenidos al Norte", 2008, "francesa", "comedia");
var peli7 = new pelicula_1.Pelicula("La naranja mecánica", 1971, "británica", "drama");
var peli8 = new pelicula_1.Pelicula("Up", 2009, "estadounidense", "fantasía");
var peli9 = new pelicula_1.Pelicula("La Ola", 2008, "alemana", "drama");
var peli10 = new pelicula_1.Pelicula("Amélie", 2001, "francesa", "comedia");
peli1.actores = actores1;
peli1.director = profe2;
peli1.guionista = "James Cameron";
peli1.idioma = "Inglés";
peli1.plataforma = "Cine";
peli1.esMCU = false;
peli1.nombreProtagonista = "Jack y Rose";
peli1.productora = "Universal";
peli1.distribuidora = "Universal";
peli2.actores = actores2;
peli2.director = profe4;
peli2.guionista = "Mario Puzo";
peli2.idioma = "italiano";
peli2.plataforma = "Cine";
peli2.esMCU = false;
peli2.nombreProtagonista = "Vitto Corleone";
peli2.productora = "Warner";
peli2.distribuidora = "Warner";
peli3.actores = actores3;
peli3.director = profe8;
peli3.guionista = "Antonio Perez";
peli3.idioma = "español";
peli3.plataforma = "televisión";
peli3.esMCU = false;
peli3.nombreProtagonista = "Manola";
peli3.productora = "Atresmedia";
peli3.distribuidora = "Atresmedia";
peli4.actores = actores1;
peli4.director = profe2;
peli4.guionista = "Joel Cohen";
peli4.idioma = "Inglés";
peli4.plataforma = "Cine";
peli4.esMCU = false;
peli4.nombreProtagonista = "Woody y Buzz";
peli4.productora = "Pixar";
peli4.distribuidora = "Disney";
peli5.actores = actores2;
peli5.director = profe4;
peli5.guionista = "Ignacio del Moral";
peli5.idioma = "Español";
peli5.plataforma = "cine";
peli5.esMCU = false;
peli5.nombreProtagonista = "Jose Suarez";
peli5.productora = "Paramount";
peli5.distribuidora = "Paramount";
peli6.actores = actores3;
peli6.director = profe8;
peli6.guionista = "Antonio Pérez";
peli6.idioma = "frnacés",
    peli6.plataforma = "cine";
peli6.esMCU = false;
peli6.nombreProtagonista = "Philippe";
peli6.productora = "Pathé";
peli6.distribuidora = "Pathé";
peli7.actores = actores1;
peli7.director = profe2;
peli7.guionista = "Stanley Kubrick";
peli7.idioma = "inglés";
peli7.plataforma = "cine";
peli7.esMCU = false;
peli7.nombreProtagonista = "Alex";
peli7.productora = "Warner";
peli7.distribuidora = "Warner";
peli8.actores = actores2;
peli8.director = profe4;
peli8.guionista = "Bob Peterson";
peli8.idioma = "inglés";
peli8.plataforma = "cine";
peli8.esMCU = false;
peli8.nombreProtagonista = "Carl";
peli8.productora = "Disney";
peli8.distribuidora = "Disney";
peli9.actores = actores3;
peli9.director = profe8;
peli9.guionista = "Dennis Gansel";
peli9.idioma = "alemán";
peli9.plataforma = "internet";
peli9.esMCU = false;
peli9.nombreProtagonista = "Rainer";
peli9.productora = "Rat Pack";
peli9.distribuidora = "Constantin Film";
peli10.actores = actores1;
peli10.director = profe2;
peli10.guionista = "Guillaume Laurant";
peli10.idioma = "francés";
peli10.plataforma = "cine";
peli10.esMCU = false;
peli10.nombreProtagonista = "Amélie";
peli10.productora = "Union";
peli10.distribuidora = "Fox";
var ieme1 = new iemedebe_1.Iemedebe([peli3, peli5, peli7, peli10]);
/*
profe1.mostrarValor();
profe2.mostrarValor();
profe3.mostrarValor();
profe4.mostrarValor();
profe5.mostrarValor();
profe6.mostrarValor();
profe7.mostrarValor();
profe8.mostrarValor();
profe9.mostrarValor();
profe10.mostrarValor();*/
/*peli1.mostrarDatos();
peli2.mostrarDatos();
peli3.mostrarDatos();
peli4.mostrarDatos();
peli5.mostrarDatos();
peli6.mostrarDatos();
peli7.mostrarDatos();
peli8.mostrarDatos();
peli9.mostrarDatos();
peli10.mostrarDatos();*/
//console.log(ieme1)
var myJson = JSON.stringify(ieme1);
var fs = require('fs');
/*fs.writeFile("imdbBBDD.json", myJson, function(err, result) {
    if(err) {console.log('error', err)}
    else{console.log("Tu archivo se ha generado correctamente")};
})*/
fs.writeFileSync("imdbBBDD.json", myJson);
//Creando version 5
var lectura = fs.readFileSync("imdbBBDD.json", "utf8");
var ieme2 = JSON.parse(lectura);
console.log(ieme2.peliculas[0].titulo);
