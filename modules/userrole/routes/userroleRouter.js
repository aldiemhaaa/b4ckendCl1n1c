const express = require('express');
const userroleController = require('../controllers/userroleController');

const {verifyToken} = require('../../templates/verifytoken');
const router = express.Router();


router.post('/',verifyToken, userroleController.create);
router.get('/', userroleController.getAll);
router.put('/:id',verifyToken, userroleController.update);
router.get('/:id',verifyToken, userroleController.getById);
router.delete('/:id', userroleController.delete);

module.exports = router;
