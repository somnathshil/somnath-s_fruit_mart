const User = require("../models/user.js");

module.exports.userSignUpPageRender =  (req, res)=>{
    res.render("user/signup.ejs");
};

module.exports.userSignUpPagePost =  async (req, res)=>{
    try{
     let {username, email, password} = req.body;
     const newUser = new User({
         email, username
     });
     let registeredUser = await User.register(newUser, password);
     console.log(registeredUser);
     req.login(registeredUser, (err)=>{
         if(err){
             return next(err);
         } req.flash("success", "You are registered successfully!");
         res.redirect("/fruits");
     })
    
    } catch(err){
     req.flash("error", err.message);
     res.redirect("/signup");
    }
 };

 module.exports.userLogin = (req, res)=>{
    res.render("user/login.ejs");
};

module.exports.userLoginPost = async (req, res)=>{
    req.flash("success", "Welcome back to fruit mart! you are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/fruits";
    res.redirect(redirectUrl);
 };

 module.exports.userLogOut = (req, res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "you logged out!");
        res.redirect("/fruits");
    });
};