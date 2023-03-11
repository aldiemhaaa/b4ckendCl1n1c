const express = require('express');
const profileController = require('../controllers/profileController');
const Profile = require('../models/profileSchema');
const {verifyToken} = require('../../templates/verifytoken');
const router = express.Router();

router.post('/',verifyToken, profileController.create);
router.put('/:id',verifyToken, profileController.update);
router.get('/:id',verifyToken, profileController.getById);


module.exports = router;
