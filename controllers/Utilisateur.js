// Amener le modele de l'utilisateur avec les relation
import {Utilisateur} from "../models/Relation.js";
//Controller
export const utilisateurList = async (req, res) => {

    //Liste des utilisateurs depuis la base de donnees
    const utilisateurs = await Utilisateur.findAll();

    res.status(200).json({ data: utilisateurs });

}

//Creation d'un utilisateur
export const addUtilisateur = async (req, res) => {
    //Les informations du nouvel utilisateur
    const utilisateur = req.body;

    try {
        await Utilisateur.create(utilisateur);
        res.status(201).json({ message: "L'utilisateur a été créé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Mise a jour d'un utilisateur
export const updateUtilisateur = async (req, res) => {
    //L'information actuelle
    const { id } = req.params;
    
    //Validation de l'id
    if (!parseInt(id)) return res.status(404).json({ message: "Cet utilisateur n'existe pas" });
    const utilisateur = await Utilisateur.findByPk(id);
    //Nouvelle information
    const newUtilisateur = req.body;
    try {
        await utilisateur.update(newUtilisateur);
        res.status(200).json({ message: "Utilisateur mis à jour avec succès" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Suppression d'un utilisateur
export const removeUtilisateur = async (req, res) => {
    const { id } = req.params;
    try {
        await Utilisateur.destroy({ where: { id } });
        res.status(200).json({ message: `Utilisateur ${id} supprimé avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

