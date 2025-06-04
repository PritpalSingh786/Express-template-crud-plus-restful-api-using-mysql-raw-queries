
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.showAllUsers);
router.get('/create', userController.createUserForm);
router.post('/create', userController.saveUser);
router.get('/edit/:id', userController.editUserForm);
router.post('/edit/:id', userController.updateUser);
router.post('/delete/:id', userController.deleteUser);

module.exports = router;
