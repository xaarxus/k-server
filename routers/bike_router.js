const Router = require('express').Router;
const bike_controller = require('../controllers/bike_controller');

const router = new Router();

router.get('/bikes', bike_controller.getAllBikes);

router.post('/addBike', bike_controller.addNewBike);

router.patch('/updateBike', bike_controller.updateBike);

router.delete('/deleteBike', bike_controller.deleteBike);

module.exports = router;