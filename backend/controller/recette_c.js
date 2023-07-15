const Recette = require("../model/recette");

const ajouterRecette = async (req, res) => {
  try {
    const { nom, description, ingrédients, instructions } = req.body;

    if (!nom || !description || !ingrédients || !instructions) {
      return res
        .status(400)
        .json({ error: "Tous les champs doivent être remplis" });
    }

    const recette = new Recette({
      nom,
      description,
      ingrédients,
      instructions,
    });

    const result = await recette.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const modificationRecette = async (req, res) => {
  try {
    const { nom, description, ingrédients, instructions } = req.body;
    const id = req.params.id;

    if (!nom && !description && !ingrédients && !instructions) {
      return res
        .status(400)
        .json({ error: "Au moins un champ doit être rempli" });
    }

    if (!nom || !description || !ingrédients || !instructions) {
      return res
        .status(400)
        .json({ error: "Tous les champs doivent être remplis" });
    }

    const updateFields = {};

    if (nom) updateFields.nom = nom;
    if (description) updateFields.description = description;
    if (ingrédients) updateFields.ingrédients = ingrédients;
    if (instructions) updateFields.instructions = instructions;

    const result = await Recette.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (result) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cette recette n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getToutesRecettes = async (req, res) => {
  try {
    const recettes = await Recette.find();

    if (recettes.length > 0) {
      res.status(200).json(recettes);
    } else {
      res.status(204).json({ msg: "Aucune recette trouvée" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getRecette = async (req, res) => {
  try {
    const id = req.params.id;
    const recette = await Recette.findById(id);

    if (recette) {
      res.status(200).json(recette);
    } else {
      res.status(204).json({ msg: "Cette recette n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const supprimerRecette = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Recette.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cette recette n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = {
  ajouterRecette,
  getToutesRecettes,
  getRecette,
  modificationRecette,
  supprimerRecette,
};
