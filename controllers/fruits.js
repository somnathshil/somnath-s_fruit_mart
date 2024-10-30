const Listing = require("../models/listingSchema.js");


module.exports.index = async (req, res)=>{
    let allFruits = await Listing.find({});
     res.render("fruits/index.ejs", {allFruits});
 };

 
 module.exports.renderNewForm =  (req, res)=>{
                res.render("fruits/new.ejs");
            };


module.exports.createListing = async (req, res, next)=>{
      let location = req.body.fruit.country;
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    async function fetchData(geocodeUrl){
        try{
            const response = await fetch(geocodeUrl);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json(); // Parse the JSON response
            return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
        }; 
     let geometry = await fetchData(geocodeUrl);
     let {lat, lon} = geometry[0];
     const latitude = parseFloat(lat);
     const longitude = parseFloat(lon);

    let url = req.file.path;
    let filename = req.file.filename;
    let newAdd = new Listing(req.body.fruit);
    newAdd.owner = req.user._id;
    newAdd.image = {url, filename};  
    newAdd.locLongitude = longitude;
    newAdd.locLatitude = latitude;
    await newAdd.save();
    req.flash("success", "New Listing Created");
    res.redirect("/fruits");
};


module.exports.showListing = async (req, res, next)=>{
    let {id} = req.params;
    let fruit = await Listing.findById(id)
    .populate({path: "reviews", populate: {path: "author",},}).populate("owner");
    if(!fruit){
       req.flash("error", "Listing you requested for does not exist!");
       res.redirect("/fruits");
    }
     res.render("fruits/show.ejs", {fruit});
 };


module.exports.editListing = async (req, res)=>{
    let {id} = req.params;
     let fruit = await Listing.findById(id);
     if(!fruit){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/fruits");
     }

     let originalImageUrl = fruit.image.url;
     originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_300/e_blur:80");

      res.render("fruits/edit.ejs", {fruit, originalImageUrl});
 };


 module.exports.updateListing = async (req, res, next)=>{
        let {id} = req.params;
      let listing = await Listing.findByIdAndUpdate(id, {...req.body.fruit});


      let location = req.body.fruit.country;
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    async function fetchData(geocodeUrl){
        try{
            const response = await fetch(geocodeUrl);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json(); // Parse the JSON response
            return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
        }; 
     let geometry = await fetchData(geocodeUrl);
     let {lat, lon} = geometry[0];
     const latitude = parseFloat(lat);
     const longitude = parseFloat(lon);
     listing.locLongitude = longitude;
     listing.locLatitude = latitude;
      await listing.save();

      if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = {url, filename};
       await listing.save();
    }
       req.flash("success", " Listing Updated");
       res.redirect(`/fruits/${id}`);
 };

 module.exports.deleteGetListing = async (req, res)=>{
    let {id} = req.params;
    let fruit = await Listing.findById(id);
    res.render("fruits/delete.ejs", {fruit});
 };

 module.exports.deleteListing = async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", " Listing deleted");
    res.redirect("/fruits");
 };