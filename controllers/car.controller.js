const CarModel = require('../models/car.model');

const postCar = async (req, res) => {
    try {
       const { model, year, brand } = req.body;
       const posted = await CarModel.create({
            model, year, brand
       })
       if(posted){
        res.status(201).json({
            success: "Vehículo creado con éxito"
        })
       }
    } catch (error) {
        res.status(500).json({
          error: error,
        });
    }
}

const getCars = async (req, res) => {
    try {
        const cars = await CarModel.findAll();
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({
          error: error,
        });
    }
}

const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await CarModel.findOne({
            where: {
                id
            }
        });
        if(car) {
            res.status(200).json(car)
        } else {
            res.status(404).json({
                error: "Not found"
            })
        }
    } catch (error) {
        res.status(500).json({
          error: error,
        });
    }
}

const updateCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const { model, year, brand } = req.body;
        const car = await CarModel.findOne({
            where: {
                id
            }
        });
        if (car){
            const updated = await car.update({
                model, year, brand
            })
            res.status(200).json({
                success: "Vehículo actualizado con éxito",
                msg: updated
             })
        } else {
            res.status(404).json({
                error: "Not found"
            })
        }

    } catch (error) {
        res.status(500).json({
          error: error,
        });
    }
}

const deleteCarById = async (req, res) => {
    try {
       const { id } = req.params;
       const deleted = await CarModel.destroy({
           where: {
               id
           }
       })
       if(deleted > 0) {
           res.status(200).json({
               success: "Vehículo eliminado con éxito"
            })
       } else {
        res.status(404).json({
            error: "Not found"
        })
       }
       
    } catch (error) {
        res.status(500).json({
          error: error,
        });
    }
}


module.exports = {
    postCar,
    getCars,
    getCarById,
    updateCarById,
    deleteCarById
}