const express = require("express");
const router = express.Router();
const wishlistsCtrl = require("../controllers/wishlists");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.put("/wishlists/:id/edit", ensureLoggedIn, wishlistsCtrl.edit);
router.post("/games/:id/wishlists", ensureLoggedIn, wishlistsCtrl.create);
router.delete("/wishlists/:id", ensureLoggedIn, wishlistsCtrl.delete);

module.exports = router;