const express = require('express');
const DaftarulangController = require('../controllers/daftarulangController');
const {verifyToken} = require('../../templates/verifytoken');

const router = express.Router();

router.post('/',verifyToken, DaftarulangController.create);
router.get('/:id',verifyToken, DaftarulangController.getById);
router.get('/noreg/:id',verifyToken, DaftarulangController.getByNoReg);
router.get('/norm/:id',verifyToken, DaftarulangController.getByNoRm);
router.get('/tgl/:id',verifyToken, DaftarulangController.getByTglKunjungan);
router.get('/poli/:id',verifyToken, DaftarulangController.getByPoli);
router.get('/dokter/:id',verifyToken, DaftarulangController.getByDokter);
router.put('/:id',verifyToken, DaftarulangController.update);
router.delete('/:id', DaftarulangController.delete);

module.exports = router;
