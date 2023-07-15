const Utilisateur = require("../model/utilisateur");

const ajouterUtilisateur = async (req, res) => {
  try {
    const { noms, adresse, telephone, email, password } = req.body;

    if (!noms || !adresse || !telephone || !email || !password) {
      return res
        .status(400)
        .json({ error: "Tous les champs doivent être remplis" });
    }

    const utilisateur = new Utilisateur({
      noms,
      adresse,
      telephone,
      email,
      password,
    });

    const result = await utilisateur.save();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const modificationUtilisateur = async (req, res) => {
  try {
    const { noms, adresse, telephone, email, password } = req.body;
    const id = req.params.id;

    if (!noms || !adresse || !telephone || !email || !password) {
      return res
        .status(400)
        .json({ error: "Tous les champs doivent être remplis" });
    }

    const updateFields = {
      noms,
      adresse,
      telephone,
      email,
      password,
    };

    const result = await Utilisateur.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (result) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const getTousUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();

    if (utilisateurs.length > 0) {
      res.status(200).json(utilisateurs);
    } else {
      res.status(204).json({ msg: "Aucun utilisateur trouvé" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUtilisateur = async (req, res) => {
  try {
    const id = req.params.id;
    const utilisateur = await Utilisateur.findById(id);

    if (utilisateur) {
      res.status(200).json(utilisateur);
    } else {
      res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const supprimerUtilisateur = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Utilisateur.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ msg: "Suppression réussie" });
    } else {
      res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const validerUtilisateur = async (req, res) => {
  try {
    const { email, password } = req.body;

    const utilisateur = await Utilisateur.findOne({ email, password });

    if (utilisateur) {
      res.status(200).json({ msg: "Bienvenue" });
    } else {
      res.status(404).json({ msg: "Identifiants invalides" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  ajouterUtilisateur,
  getTousUtilisateurs,
  getUtilisateur,
  modificationUtilisateur,
  supprimerUtilisateur,
  validerUtilisateur,
};
