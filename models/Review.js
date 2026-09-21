const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    reviewBody: {
    type: String,
    required: true
}
,
rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
}
,
creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}
,
carListing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CarListing",
    required: true
}
,
}, {timestamps: true});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
 
