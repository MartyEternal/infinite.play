const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = {
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type: Date},
    destination: {type: String}
}

const currentDate = new Date()
const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'United']},
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: { type: Number, required: true, min: 10, max: 9999},
    departs: {type: Date, default: currentDate.setFullYear(currentDate.getFullYear() + 1)},
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)