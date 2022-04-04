const express = require('express');
const router = express.Router();
const users = require('./users');
const boards = require('./board');
const lists = require('./list');
const cards = require('./card');
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', users);
router.use('/boards', boards);
router.use('/lists', lists);
router.use('/cards', cards);

module.exports = router;