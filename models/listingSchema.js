const { ref, required } = require('joi');
const mongoose = require('mongoose');
const Review = require("./review.js");
const User = require("./user.js");

const Schema = mongoose.Schema;

const newSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
        },
    price: Number,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    locLongitude: {
        type: Number,
    },
    locLatitude: {
     type: Number,
    }
});

newSchema.post("findOneAndDelete", async (listings)=>{
    if(listings){
     await Review.deleteMany({_id: {$in: listings.reviews}});
    }
});

const Listing = mongoose.model("Listing", newSchema);

module.exports = Listing;

