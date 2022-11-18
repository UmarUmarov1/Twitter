const { Router } = require('express');
const router  = Router();
const UserController = require('../controllers/users.controller');
const { route } = require('./twitts.route');

router.post('/users', UserController.addNewUser);
router.patch('/users/:id', UserController.changeUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getOneUser);

module.exports = router; 