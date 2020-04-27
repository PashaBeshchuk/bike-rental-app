const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available:{
        type: Boolean,
        default: true,
    },
    rented:{
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        default: null
    }
})



module.exports = model('bikeRental', schema)