const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB)

const missionsSchema = mongoose.Schema({
    nom:String,
    date:Date,
    succes:String,
})

const Mission = mongoose.model('mission',missionsSchema);

const findNMissions = async (n) => {
    let missions = await Mission.find({}).sort({"date": 1}).limit(n).exec()
    return missions
}

const findMissionsByName = async (nom) => {
    let missions = await Mission.find({nom: {$regex: new RegExp(nom.toUpperCase(), "i")}}).sort({"date": 1}).exec();
    console.log(missions)
    return missions;
}

const findMissionById = async (id) => {
    let mission = await Mission.findById(id);
    return mission;
}

module.exports={
    findMissionsByName,
    findMissionById,
    findNMissions
}