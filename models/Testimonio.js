import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonio = db.define("testimonios", { // Esto es crear un modelo de la tabla de viajes. por tanto definimos todos los datos que queremos que tenga la tabla (o en este caso los que ya tiene). menos el id que se sobreentiende
    nombre: {
        type: Sequelize.STRING  
    },
    email: {
        type: Sequelize.STRING  
    },
    mensaje: {
        type: Sequelize.STRING  
    }
});