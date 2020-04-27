const bikeRental = require('../models/models_bike')

exports.getAllBike = async (req, res) => {
    const resBikeRental = await bikeRental.find({})
    res.send(resBikeRental)
}

exports.createNewRental = async (req, res) => {
    const newBikeRental = new bikeRental({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
    })
    await newBikeRental.save()
    res.send({
        saccess: true,
     })
}

exports.rentBike = async(req, res) => {
    const id = req.body._id
    await bikeRental.updateOne({_id:id}, {$set:{available: false, rented: true, time:req.body.date }})
    res.send()
}

exports.deleteBike = async(req, res) => {
    const id = req.params.id
    await bikeRental.deleteOne({_id:id})
    res.send()
}

exports.cancelRent = async(req, res) => {
    const id = req.body._id
    await bikeRental.updateOne({_id:id}, {$set:{available: true, rented: false, time:null}})
    res.send()
}
