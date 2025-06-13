const express = require('express');
const router = express.Router();
const { getCredits } = require('../controllers/creditsController');

router.get('/:userId', getCredits);

module.exports = router;
