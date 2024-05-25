const Game = require('../models/game');

module.exports = {
    create,
    delete: deleteReview,
    edit,
    loadRecentReviews,
};

async function create(req, res) {
    // code body here
    const game = await Game.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    game.reviews.push(req.body);
    try {
        await game.save();
    } catch (err) {
        res.status(500).send("Can't create review");
    }
    res.redirect(`/games/${game._id}`);
};

async function deleteReview(req, res) {
    // code body here
    try {
        const game = await Game.findById(req.params.id);
        game.reviews.id(req.params.reviewId).remove();
        await game.save();
        res.redirect(`/games/${game._id}`);
    } catch (err) {
        res.status(500).send("Can't delete review");
    }
};

async function edit(req, res) {
    // code body here
    try {
        const game = await Game.findById(req.params.id);
        const review = game.reviews.id(req.params.reviewId);
        review.content = req.body.content;
        review.rating = req.body.rating;
        await game.save();
        res.redirect(`/games/${game._id}`);
    } catch (err) {
        res.status(500).send("Can't edit review");
    }
};

async function loadRecentReviews(req, res) {
    // code body here
}