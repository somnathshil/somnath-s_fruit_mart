const mongoose = require('mongoose');
const Listing = require("../models/listingSchema.js");
const fruits = require("./data.js");



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/error');
  console.log("Db is connected")
};

const addData = async ()=> {
   await Listing.deleteMany({});
   fruitsm = fruits.map((obj) => ({
    ...obj, 
    owner: "670d15338dd75df1cf40895e",
  }));
   await Listing.insertMany(fruitsm);
   console.log("Data saved");
};

addData();


