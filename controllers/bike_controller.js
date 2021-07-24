const Bike = require('../models/Bike');

class BikeController {
    async getAllBikes(req, res) {
        try {
            const bikes = await Bike.find();
            res.status(200).json(bikes);
        } catch (error) {
            console.log(error);
        }
    }

    async addNewBike(req, res) {
        try {
            const { name, type, color, size, price, id, description } = req.body;
            const candidat1 = await Bike.findOne({ id });
            if (candidat1) {
                return res.status(201).json({ message: 'ID is already in use.' })
            }
            const candidat2 = await Bike.findOne({ name });
            if (candidat2) {
                return res.status(201).json({ message: 'Name is already in use.' })
            }
            const bike = await Bike.create({ name, type, color, size, price, id, description, status: 'Available' });
            res.status(201).json({ bike, message: 'Bike was added.' })
        } catch (error) {
            console.log(error);
        }
    }

    async updateBike(req, res) {
        try {
            const { id, status } = req.body;
            const bike = await Bike.findOne({ id });
            bike.status = status;
            bike.save();
            const bikes = await Bike.find();
            res.status(201).json({ bikes, message: 'Status has been changed.' });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteBike(req, res) {
        try {
            const { id } = req.body;
            await Bike.deleteOne({ id });
            const bikes = await Bike.find();
            res.status(201).json(bikes);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new BikeController();