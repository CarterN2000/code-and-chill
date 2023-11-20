const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thingSchema = new Schema({
    name: String,
    created: Date,
    likeness: {
        type: Number,
        min: 1,
        max: 5
    }
})

const Thing = mongoose.model('Thing', thingSchema)
module.exports = Thing
