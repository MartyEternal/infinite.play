const Wishlist = require("../models/wishlist");

module.exports = {
    create,
    delete: deleteGameFromWishlist,
    edit,
    index,
};

async function create(req, res) {
    try {
        let wishlist = await Wishlist.findOne({ user: req.user._id });
        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user._id, games: [] });
        }
        if (!wishlist.games) {
            wishlist.games = [];
        }
        if (!wishlist.games.includes(req.params.id)) {
            wishlist.games.push(req.params.id);
        }
        await wishlist.save();
        res.redirect(`/games/${req.params.id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Try that again");
    }
};

async function deleteGameFromWishlist(req, res) {
    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { user: req.user._id },
            { $pull: { games: req.body.gameId } },
            { new: true }
        );
        res.redirect("/wishlists");
    } catch (err) {
        console.error(err);
        res.status(500).send("Try that again");
    };
};

async function edit(req, res) {
    // code body here
};

async function index(req, res) {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('games');
        res.render("wishlists/index", { wishlist });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving wishlist");
    };
};