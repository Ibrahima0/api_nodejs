const express = require("express");
const {
  ajouterUtilisateur,
  getTousUtilisateurs,
  getUtilisateur,
  modificationUtilisateur,
  supprimerUtilisateur,
  validerUtilisateur,
} = require("../controller/utilisateur_c");
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getTousUtilisateurs);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(modificationUtilisateur);
router.route("/utilisateurs/:id").delete(supprimerUtilisateur);
router.route("/utilisateurs/valider").post(validerUtilisateur);

module.exports = router;
