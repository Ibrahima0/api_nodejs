const express = require("express");
const mongoose = require("mongoose");
const routeUtilisateur = require("./route/utilisateur_r");
const routeRecette = require("./route/recette_r");
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/dbAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion avec la base de données établie");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    app.use("/api/v1", routeUtilisateur, routeRecette);

    // Gérer les erreurs de connexion à la base de données
    mongoose.connection.on("error", (err) => {
      console.log("Erreur lors de la connexion à la base de données", err);
      server.close(() => {
        process.exit(-1);
      });
    });
  })
  .catch((err) => {
    console.log("Erreur lors de la connexion à la base de données", err);
    process.exit(-1);
  });
