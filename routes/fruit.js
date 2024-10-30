const express = require("express");
const router = express.Router();
const Listing = require("../models/listingSchema.js");
const asyncWrap = require("../utils/asyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isListingOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/fruits.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


// Index route:
router.get("/", asyncWrap(listingController.index));
     
 // New Route Get and Post:
 router.route("/new")
 .get( isLoggedIn, listingController.renderNewForm)
 .post( isLoggedIn, upload.single('fruit[image]'), validateListing, asyncWrap(listingController.createListing));
 
// get, update, delete 
router.route("/:id")
.get(asyncWrap (listingController.showListing))
.put( isLoggedIn, isListingOwner, upload.single('fruit[image]'), validateListing, asyncWrap(listingController.updateListing))
.delete( isLoggedIn, isListingOwner, asyncWrap (listingController.deleteListing));

 // edit route:
 router.get("/:id/edit", isLoggedIn, isListingOwner, asyncWrap(listingController.editListing));

 // delete get route:
 router.get("/:id/delete", isListingOwner,  asyncWrap(listingController.deleteGetListing));

 module.exports = router;