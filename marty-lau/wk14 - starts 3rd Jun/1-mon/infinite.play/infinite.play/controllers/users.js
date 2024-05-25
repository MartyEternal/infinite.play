const User = require("../models/user");

module.exports = {
  show,
};

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id).populate('wishlist');
    if (user.wishlist) {
      await user.populate({
        path: 'wishlist',
        populate: { path: 'games' }
      }).execPopulate();
    }
    res.render('users/details', { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving user profile.");
  }
}