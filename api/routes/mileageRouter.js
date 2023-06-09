const express = require('express');
const router = express.Router()
const mileageController = require('../controllers/mileageController')

router.post('/', mileageController.createMileage);
router.get('/:date', mileageController.getMileageByDate);
router.delete('/:id', mileageController.deleteMileageById);

module.exports = router;