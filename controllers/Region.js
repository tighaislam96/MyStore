// Importation du modèle Region
import Region from "../models/region.js";

// Controller pour lister toutes les régions
export const regionList = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.status(200).json(regions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller pour ajouter une nouvelle région
export const addRegion = async (req, res) => {
    const { province } = req.body;

    try {
        const newRegion = await Region.create({ province });
        res.status(201).json(newRegion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller pour mettre à jour une région
export const updateRegion = async (req, res) => {
    const { id } = req.params;
    const { province } = req.body;

    try {
        const region = await Region.findByPk(id);

        if (!region) {
            return res.status(404).json({ message: "Région non trouvée" });
        }

        await region.update({ province });
        res.status(200).json({ message: "Région mise à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller pour supprimer une région
export const removeRegion = async (req, res) => {
    const { id } = req.params;

    try {
        const region = await Region.findByPk(id);

        if (!region) {
            return res.status(404).json({ message: "Région non trouvée" });
        }

        await region.destroy();
        res.status(200).json({ message: `Région ${id} supprimée avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
