const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ["Action", "Adventure", "Casual", "Fighting", "Puzzle", "Role Playing", "Shooter", "Sports", "Strategy"],
        required: true
    },
    developer: [{
        type: Schema.Types.ObjectId,
        ref: "Performer"
    }],
    price: {
        type: Number,
        min: 0,
        required: true
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("Game", gameSchema);