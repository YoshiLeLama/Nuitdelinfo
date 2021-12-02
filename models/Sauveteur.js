const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB)

const sauveteurSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    date_naissance: Date,
    lieu_naissance: String,
    date_mort: Date,
    lieu_mort: String,
    poste: String,
    nombre_missions: Number,
    equipages_sauves: Number,
    personnes_sauvees: Number,
    photo: String
});

const Sauveteur = mongoose.model('sauveteur', sauveteurSchema);

const findNSauveteurs = async (n) => {
    let sauveteurs = await Sauveteur.find({}).sort({"nom": 1}).limit(n).exec()
    return sauveteurs
}

/**
 * 
 * @param {string} nom 
 * @returns 
 */
const findSauveteursByName = async (nom) => {
    let sauveteurs = await Sauveteur.find({nom: new RegExp(nom.toUpperCase())}).sort({"date_naissance": 1}).exec()
    console.log(sauveteurs)
    return sauveteurs
}

const findSauveteurById = async (id) => {
    let sauveteur = await Sauveteur.findById(id);
    console.log(sauveteur);
    return sauveteur;
}

module.exports = {
    findSauveteursByName,
    findNSauveteurs,
    findSauveteurById
}