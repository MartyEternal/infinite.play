var express = require('express');
var router = express.Router();

const gamesCtrl = require("../controllers/games");

router.get("/", gamesCtrl.index);
router.get("/new", gamesCtrl.new);
router.get("/:id", gamesCtrl.show);

router.get("/search", gamesCtrl.searchGames);

router.get("/:id/edit", gamesCtrl.edit);
router.put("/:id", gamesCtrl.update);

router.post("/", gamesCtrl.create);

router.delete("/:id", gamesCtrl.delete);

module.exports = router;
