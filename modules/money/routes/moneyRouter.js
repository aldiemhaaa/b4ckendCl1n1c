const express = require('express');
const moneyController = require('../controllers/moneyController');

const router = express.Router();

router.post('/', moneyController.createMoney);
router.get('/', moneyController.getAllMoney);
router.put('/:id', moneyController.updateMoney);
router.delete('/:id', moneyController.deleteMoney);

module.exports = router;
