
import { Sequelize } from "sequelize";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import dotenv from 'dotenv';
import connexion from "./config/connexion.js";

connexion.sync({alter:true});
import router from "./routes/UtilisateursRotes.js";

const app = express();
const PORT = process.env.PORT || 5000; 

app.use("/utilisateurs",router)




app.listen(PORT, () => {
    console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
});



// import Utilisateur from "./models/Utilisateurs.js";
// import Role from "./models/Role.js";

//importation des controleur 
// import { addUtilisateur, utilisateurList, removeUtilisateur, updateUtilisateur } from "./controllers/Utilisateur.js";






