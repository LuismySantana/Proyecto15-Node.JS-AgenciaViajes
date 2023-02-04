import Sequelize from "sequelize";
import dotenv from "dotenv/config";

// dotenv.config(); --> Esto hace que mis varianbles de entorno de .env se puedan recoger desde process.env | Es innecesario si el import lo recoges de dotenv/config


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 2000
    },
    operatorAliases: false
});

export default db;