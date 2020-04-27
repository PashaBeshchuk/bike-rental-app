const express = require('express');
const { getAllBike, createNewRental, rentBike, deleteBike, cancelRent } = require('../controllers/bike_rental_controller')
const router = express.Router();

router.get('/', getAllBike);
router.post('/create', createNewRental);
router.put('/rent', rentBike);
router.delete('/delete/:id', deleteBike);
router.put('/cancel', cancelRent);


module.exports = router;