const Game = require("../models/game");

// const genres = ["Action", "Adventure", "Casual", "Fighting", "Puzzle", "Role Playing", "Shooter", "Sports", "Strategy"];
// const currency = ["USD", "EUR", "GBP", "AUS", "NZ", "JPY"];

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
    // const query = {};
    // const sort = { popularity: 1 };
    // const cursor = Game.find(query).sort(sort);

    // for await (const doc of cursor) {
    //     console.dir(doc);
    // };
    // res.render("games/index", {
    //     games: await Game.find({}),
    // });
    try {
        const games = await Game.find({}).sort({ createdAt: -1 });
        res.render("games/index", { games });
    } catch (err) {
        console.error(err);
        res.status(500).send("Can't load game");
    };
};

function newGame(req, res) {
    res.render("games/new", { errorMsg: "" });
};

async function create(req, res) {
    // for (let key in req.body) {
    //     if (req.body[key] === "") delete req.body[key];
    // };
    try {
        // const { name, genre, price, description } = req.body;

        // const Game = new Game({
        //     name,
        //     genre,
        //     price,
        //     description,
        // });
        const game = await Game.create(req.body);
        res.redirect(`/games/${game._id}`);
    } catch (err) {
        console.log(err);
        res.render("games/new", { errorMsg: "Can't make game" })
    };
};

async function show(req, res) {
    try {
        const game = await Game.findById(req.params.id).populate("reviews.user");
        res.render("games/show", { game });
    } catch (err) {
        res.status(404).send("Game ain't here");
    };
};

async function edit(req, res) {

};

function update(req, res) {

};

function deleteGame(req, res) {

};