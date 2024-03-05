// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addUtilisateur, utilisateurList, removeUtilisateur, updateUtilisateur } from ".\controllers\Utilisateur.js"
const router = Router();

router
    .get("/", utilisateurList)
    .post("/", addUtilisateur)
    .put("/:id", updateUtilisateur)
    .delete("/:id", removeUtilisateur);

export default router;
