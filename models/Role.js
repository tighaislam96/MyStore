import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Role = database.define('Role', {
    role: { type: DataTypes.STRING, allowNull: false }
});

// Exporter le modèle de rôle
export default Role;
