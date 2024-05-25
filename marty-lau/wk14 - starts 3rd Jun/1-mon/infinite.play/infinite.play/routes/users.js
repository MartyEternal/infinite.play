const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/users/:id', ensureLoggedIn, usersCtrl.show);

module.exports = router;