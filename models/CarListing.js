const mongoose = require("mongoose");

const CarListingSchema = new mongoose.Schema({

}, {timestamps: true});

const CarListing = mongoose.model("CarListing", CarListingSchema);

module.exports = CarListing;
