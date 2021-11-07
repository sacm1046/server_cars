const express = require('express');
const {
    postCar,
    getCars,
    getCarById,
    updateCarById,
    deleteCarById
} = require('../controllers/car.controller');
const router = express.Router();

router.post('/car', postCar)
router.get('/cars', getCars)
router.get('/car/:id', getCarById)
router.put('/car/:id', updateCarById)
router.delete('/car/:id', deleteCarById)

module.exports = router;