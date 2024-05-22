const express = require("express");
const router = express.Router();
const wishlistsCtrl = require("../controllers/wishlists");
// const ensureLoggedIn = require("../config/ensureLoggedIn");

router.put("/wishlists/:id/edit", wishlistsCtrl.edit);
router.post("/games/:id/wishlists", wishlistsCtrl.create);
router.delete("/wishlists/:id", wishlistsCtrl.delete);

module.exports = router;