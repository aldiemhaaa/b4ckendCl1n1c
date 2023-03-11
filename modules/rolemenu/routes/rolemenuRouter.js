const express = require('express');
const rolemenuController = require('../controllers/rolemenuController');

const {verifyToken} = require('../../templates/verifytoken');
const router = express.Router();


router.post('/',verifyToken, rolemenuController.create);
router.get('/', rolemenuController.getAll);
router.put('/:id',verifyToken, rolemenuController.update);
router.get('/:id',verifyToken, rolemenuController.getById);
router.delete('/:id', rolemenuController.delete);

module.exports = router;
