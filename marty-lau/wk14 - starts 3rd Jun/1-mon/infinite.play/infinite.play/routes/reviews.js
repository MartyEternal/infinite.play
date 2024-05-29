const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get('/recent', ensureLoggedIn, reviewsCtrl.loadRecentReviews);
router.put("/games/:id/reviews/:reviewId", ensureLoggedIn, reviewsCtrl.edit);
router.post('/games/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete("/games/:id/reviews/:reviewId", ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;
