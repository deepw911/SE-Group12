const express = require('express');
const router = express.Router();
const users = require('./users');
const boards = require('./board');
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', users);
router.use('/boards', boards);

module.exports = router;