const Wishlist = require("../models/wishlist");

module.exports = {
    create,
    delete: deleteGameFromWishlist,
    edit,
};

async function create(req, res) {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user._id });
        Wishlist.games.push(req.body.gameId);
        await wishlist.save();
        res.redirect("/wishlist");
    } catch (err) {
        console.error(err);
        res.status(500).send("Couldn't add it");
    };
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

    // const wishlist = await Wishlist.findOneAndUpdate(
    //     { user: req.user._id },
    //     { $pull: { games: req.body.gameId } },
    //     { new: true }
    // );
};

async function edit(req, res) {
    // code body here
};