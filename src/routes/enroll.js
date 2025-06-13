const express = require('express');
const router = express.Router();
const { handleEnroll } = require('../controllers/enrollController');

router.post('/', handleEnroll);

module.exports = router;
