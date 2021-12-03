const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB)

const bateauSchema = mongoose.Schema({
    nom:String,
    date:Number,
    constructeur:String,
})

const Bateau = mongoose.model('boat',bateauSchema);

const findNBoats = async (n) => {
    let bateaux = await Bateau.find({}).sort({"date": 1}).limit(n).exec()
    return bateaux
}

const findBoatsByName = async (nom) => {
    let bateaux = await Bateau.find({nom: {$regex: new RegExp(nom.toUpperCase(), "i")}}).sort({"date": 1}).exec();
    console.log(bateaux)
    return bateaux;
}

const findBoatsById = async (id) => {
    let bateau = await Bateau.findById(id);
    console.log(bateau)
    return bateau;
}

module.exports={
    findBoatsById,
    findBoatsByName,
    findNBoats
}