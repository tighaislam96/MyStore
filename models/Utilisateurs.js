// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour l'utilisateur
const Utilisateur = database.define('Utilisateur', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    DateNaissance: { type: DataTypes.DATE },
    Telephone: { type: DataTypes.DECIMAL },
    MotDePasse: { type: DataTypes.STRING }
})

// Exporter le modèle d'utilisateur
export default Utilisateur;
