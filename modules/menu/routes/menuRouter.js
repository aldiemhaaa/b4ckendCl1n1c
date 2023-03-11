const express = require('express');
const menuController = require('../controllers/menuController');

const {verifyToken} = require('../../templates/verifytoken');
const router = express.Router();


router.post('/',verifyToken, menuController.create);
router.get('/', menuController.getAll);
router.put('/:id',verifyToken, menuController.update);
router.get('/:id',verifyToken, menuController.getById);
router.delete('/:id', menuController.delete);

module.exports = router;
