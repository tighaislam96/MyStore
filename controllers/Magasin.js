// Importation du modèle Magasin
import Magasin from "../models/magasin.js";

// Controller pour lister tous les magasins
export const magasinList = async (req, res) => {
    try {
        const magasins = await Magasin.findAll();
        res.status(200).json(magasins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller pour ajouter un nouveau magasin
export const addMagasin = async (req, res) => {
    const { address, superviseur } = req.body;

    try {
        const newMagasin = await Magasin.create({ address, superviseur });
        res.status(201).json(newMagasin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller pour mettre à jour un magasin
export const updateMagasin = async (req, res) => {
    const { id } = req.params;
    const { address, superviseur } = req.body;

    try {
        const magasin = await Magasin.findByPk(id);

        if (!magasin) {
            return res.status(404).json({ message: "Magasin non trouvé" });
        }

        await magasin.update({ address, superviseur });
        res.status(200).json({ message: "Magasin mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller pour supprimer un magasin
export const removeMagasin = async (req, res) => {
    const { id } = req.params;

    try {
        const magasin = await Magasin.findByPk(id);

        if (!magasin) {
            return res.status(404).json({ message: "Magasin non trouvé" });
        }

        await magasin.destroy();
        res.status(200).json({ message: `Magasin ${id} supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
