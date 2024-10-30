const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const asyncWrap = require("../utils/asyncWrap.js");
const  passport  = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
.get( userController.userSignUpPageRender)
.post(asyncWrap(userController.userSignUpPagePost));

router.route("/login")
.get( userController.userLogin)
.post( saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
}), userController.userLoginPost);


router.get("/logout", userController.userLogOut);

module.exports = router;