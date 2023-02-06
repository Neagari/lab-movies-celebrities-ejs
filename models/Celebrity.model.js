const {Schema, model} = require("mongoose")
const celebSchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String
    }

)
// creating CelebModel; from the schema, and then exporting it
const celebModel = model('Celebrity',celebSchema)

module.exports = celebModel