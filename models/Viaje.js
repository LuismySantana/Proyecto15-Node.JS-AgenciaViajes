import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define("viajes", { // Esto es crear un modelo de la tabla de viajes. por tanto definimos todos los datos que queremos que tenga la tabla (o en este caso los que ya tiene). menos el id que se sobreentiende
    titulo: {
        type: Sequelize.STRING  
    },
    precio: {
        type: Sequelize.STRING  
    },
    fecha_ida: {
        type: Sequelize.DATE  
    },
    fecha_vuelta: {
        type: Sequelize.DATE  
    },
    imagen: {
        type: Sequelize.STRING  
    },
    descripcion: {
        type: Sequelize.STRING  
    },
    disponibles: {
        type: Sequelize.STRING  
    },
    slug: {
        type: Sequelize.STRING  
    },
});