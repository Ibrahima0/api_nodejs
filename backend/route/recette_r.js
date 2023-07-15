const express = require("express");
const {
  ajouterRecette,
  getToutesRecettes,
  getRecette,
  modificationRecette,
  supprimerRecette,
} = require("../controller/recette_c");

const router = express.Router();

router.route("/recettes").post(ajouterRecette);
router.route("/recettes").get(getToutesRecettes);
router.route("/recettes/:id").get(getRecette);
router.route("/recettes/:id").put(modificationRecette);
router.route("/recettes/:id").delete(supprimerRecette);

module.exports = router;
