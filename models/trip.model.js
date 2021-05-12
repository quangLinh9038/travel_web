const mongoose = require('mongoose')


const tripSchema = new mongoose.Schema({
    trip_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    city:{
        type: Object,
        required: true
    },
    place:{
        type: Object,
        required: true
    },
    note:{
        type: String,
        required: false
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Trip", tripSchema)