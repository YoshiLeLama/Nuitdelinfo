const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB)

const missionsSchema = mongoose.Schema({
    nom:String,
    date:String,
    succes:String,
})

const Mission = mongoose.model('Mission',missionsSchema);


module.exports={

}