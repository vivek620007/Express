const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

// GET /users
router.get('/users', userControllers.getAllUsers);

// GET /users/:id
router.get('/users/:id', userControllers.getUserById);

// POST /users
router.post('/users', userControllers.createUser);

// PUT /users/:id
router.put('/users/:id', userControllers.updateUserById);

// DELETE /users/:id
router.delete('/users/:id', userControllers.deleteUserById);


module.exports = router;


