const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
// const ensureLoggedIn = require("../config/ensureLoggedIn");

router.put("/reviews/:id", reviewsCtrl.edit);
// POST /movies/:id/reviews (create review for a movie)
router.post('/games/:id/reviews', reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.delete);

module.exports = router;