const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router
    .route("/")                               
    .get(wrapAsync(listingController.index))   // all listings(explore)
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));                       // create listing route

// new route
router.get("/new", isLoggedIn, listingController.renderNewForm);   // new page route(airbnb your home)

router
    .route("/:id")       
    .get(wrapAsync(listingController.showListing))       // show route
    .patch(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))  // update listing route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));         // delete form

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));       // render edit form

module.exports = router;
