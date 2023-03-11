const express = require('express');
const roleController = require('../controllers/roleController');

const {verifyToken} = require('../../templates/verifytoken');
const router = express.Router();


router.post('/',verifyToken, roleController.create);
router.get('/', roleController.getAll);
router.put('/:id',verifyToken, roleController.update);
router.get('/:id',verifyToken, roleController.getById);
router.delete('/:id', roleController.delete);

module.exports = router;
