const mongoose = require("mongoose");

const CarListingSchema = new mongoose.Schema({
        streetAddress: {
        type: String,
        required: true
    }
    ,
    brand: {
    type: String,
    required: true
}
,
model: {
    type: String,
    required: true
}
,
year: {
    type: Number,
    required: true
}
,
price: {
    type: Number,
    required: true
}
,
mileage: {
    type: Number,
    required: true
}
,
description: {
    type: String,
    required: true
}
,
image: {
    type: String
}
,
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},

}, {timestamps: true});

const CarListing = mongoose.model("CarListing", CarListingSchema);

module.exports = CarListing;
