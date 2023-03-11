const express = require('express');
const PasienController = require('../controllers/pasienController');
const {verifyToken} = require('../../templates/verifytoken');

const router = express.Router();

router.post('/',verifyToken, PasienController.create);
router.get('/:id',verifyToken, PasienController.getByPk);
router.put('/:id',verifyToken, PasienController.update);
router.delete('/:id', PasienController.delete);
router.get('/pencarianpasien/:id',verifyToken,PasienController.pencarianpasien);

module.exports = router;
