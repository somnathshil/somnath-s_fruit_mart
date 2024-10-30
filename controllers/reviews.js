const Listing = require("../models/listingSchema.js");
const Review = require("../models/review.js");


module.exports.reviewPost =  async (req, res)=>{
    let {id} = req.params;
    let fruit = await Listing.findById(id);
     let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
     fruit.reviews.push(newReview);

     await newReview.save();
     await fruit.save();
     req.flash("success", "New Review Created");
     res.redirect(`/fruits/${id}`);
 };

 module.exports.reviewDelete =  async (req, res)=>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
     await Review.findByIdAndDelete(reviewId);
     req.flash("success", " Review deleted");
   res.redirect(`/fruits/${id}`);
};