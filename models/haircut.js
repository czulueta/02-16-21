const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const haircutSchema = new Schema({
    highFade: {
        type: String,
    },
    midFade: {
        type: String,
    },
    lowFade: {
        type: String,
    }
})
module.exports = mongoose.model("Haircut", haircutSchema)