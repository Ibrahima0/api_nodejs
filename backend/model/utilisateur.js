const mongoose = require("mongoose");

const utilisateurSchema = new mongoose.Schema({
  noms: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema);

module.exports = Utilisateur;
