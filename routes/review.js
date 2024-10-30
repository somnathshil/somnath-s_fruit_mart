const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listingSchema.js");
const { isLoggedIn,  validateReview, isReviewAuthor  } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// review post route
router.post("/", validateReview, isLoggedIn, asyncWrap(reviewController.reviewPost));

 //Delete review route
 router.delete("/:reviewId", isLoggedIn, isReviewAuthor, asyncWrap(reviewController.reviewDelete));


 module.exports = router;