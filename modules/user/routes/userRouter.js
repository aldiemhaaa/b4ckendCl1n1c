const express = require('express');
const userController = require('../controllers/userController');
const User = require('../models/userSchema');


const router = express.Router();

const validateUser = (req, res, next) => {
    const { nama, username,password,role } = req.body;
    const users = new User({ nama, username,password,role });
  
    const error = users.validateSync();
    if (error) {
      const message = error.message;
      return res.status(400).send({ error: message });
    }
  
    next();
};


router.post('/',validateUser, userController.create);
router.get('/', userController.getAll);
router.put('/:id',validateUser, userController.update);
router.delete('/:id', userController.delete);
router.post('/login',userController.login);

module.exports = router;
