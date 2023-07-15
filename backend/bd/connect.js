const mongoose = require("mongoose");

let isConnected = false;

function connect(url, callback) {
  if (isConnected) {
    return callback();
  }

  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("Erreur lors de la connexion à la base de données");
        callback(err);
      } else {
        isConnected = true;
        callback();
      }
    }
  );
}

function fermer() {
  if (isConnected) {
    mongoose.disconnect();
    isConnected = false;
  }
}

module.exports = { connect, fermer };
