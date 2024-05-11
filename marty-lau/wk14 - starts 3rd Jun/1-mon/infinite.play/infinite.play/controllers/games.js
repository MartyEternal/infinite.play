const Game = require("../models/game");

module.exports = {
    index,
    show,
    new: newGame,
    create,
    edit,
    update,
    delete: deleteGame,
};

async function index(req, res) {
    const query = {};
    const sort = { popularity: 1 };
    const cursor = Game.find(query).sort(sort);
    
    for await (const doc of cursor) {
        console.dir(doc);
    };
    res.render("games/index", {
        games: await Game.find({}),
    });
};

function newGame(req, res) {
    const newGame = new Game();
    
    res.render("games/new", {});
};

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    };
    try {
        await Game.create(req.body);
        res.redirect("/games");
    } catch (err) {
        console.log(err);
        res.render("flights/new", { errorMsg: err.message })
    }
}