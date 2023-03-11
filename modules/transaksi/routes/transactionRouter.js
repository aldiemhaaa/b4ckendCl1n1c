const express = require('express');
const transaksiController = require('../controllers/transaksiController');

const router = express.Router();

router.post('/', transaksiController.create);
router.get('/', transaksiController.getAll);
router.put('/:id', transaksiController.update);
router.delete('/:id', transaksiController.delete);

module.exports = router;
