import mysql from 'promise-mysql';
import dotenv from 'dotenv'; 
import { Sequelize } from 'sequelize';

// Chargement des variables d'environnement à partir du fichier .env
dotenv.config();

// Création de la connexion à la base de données MySQL
const ENV = dotenv.config().parsed
const connexion = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
});

// Exportation de la connexion
export default connexion;
