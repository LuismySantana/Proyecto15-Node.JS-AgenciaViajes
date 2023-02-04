// Este archivo es el punto de partida de la ejecución de mis módulos en Node, por es ose estipula en el package.json

// const express = require("express"); // Con esto importamos en una variable nuestro módulo de express
import express from "express"; // Esta es la versión nueva, con modulos de JS // Pero en package.json debo decir que el proyecto es type module
import router from "./routes/index.js"; // Cuando son archivos del proyecto, sid debo poner la extensión
import db from "./config/db.js";

// Esta funcíón arranca el servidor de express
const app = express();


// Conectar a la bbdd
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch((error) => console.log(error));


// Cuando el deployment sea en server, habrá un conjunto de VARIABLES DE ENTORNO que serán asignadas por el servidor en cuestión y una de ellas será el puerto asignado a nuestra app
const port = process.env.PORT || 4000;


// Agregar Pug (nuestro templates engine)
app.set("view engine", "pug");


// Con esto habilitamos poder leer el body de los request para las peticiones como POST
app.use(express.urlencoded({ extended: true }));


// Obtener el año actual
app.use((req, res, next) => {       // usar un use es básicamente que accedes bajo la peticion que accedas (post, get, delete, etc) tiene que hacer esto
    res.locals.pageName = "Agencia Viajes";
    res.locals.currentYear = new Date().getFullYear();
    next(); // Las funciones nativas de Express saltan de hilo de Middleware automáticamente pero cuando nosotros hagamos middlewares custom, debemos especificar el salto
});


// Definir la public folder 
app.use(express.static("public"))


// Agregar Router
app.use("/", router); // --> Esto básicamente asigna todas mis rutas a la diagonal principal (use es una función que abarca todos los métodos HTTP)



// Esta función escucha por el puerto que se haya asignado a la app por el serve de express
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})