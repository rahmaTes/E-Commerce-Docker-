const express = require('express');
const ReviewCtrl = require('../controllers/review-ctrl');
const router = express.Router();

router.get('/reviews', ReviewCtrl.getReviews);
router.get('/', ReviewCtrl.checkServiceRunning)

module.exports = router