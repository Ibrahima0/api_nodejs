const express = require("express");
const auth = require("../middleware/auth");
const {
  ajouterRecette,
  getToutesRecettes,
  getRecette,
  modificationRecette,
  supprimerRecette,
} = require("../controller/recette_c");

const router = express.Router();

router.route("/recettes").post(auth,ajouterRecette);
router.route("/recettes").get(getToutesRecettes);
router.route("/recettes/:id").get(auth,getRecette);
router.route("/recettes/:id").put(auth,modificationRecette);
router.route("/recettes/:id").delete(auth,supprimerRecette);

module.exports = router;
