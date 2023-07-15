const mongoose = require("mongoose");

const recetteSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  ingrédients: { type: String, required: true },
  instructions: { type: String, required: true },
});

const Recette = mongoose.model("Recette", recetteSchema);

module.exports = Recette;
