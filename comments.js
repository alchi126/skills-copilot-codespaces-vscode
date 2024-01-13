// create web server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");
var seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v3", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Campground.create(
//   {
//     name: "Granite Hill",
//     image:
//       "https://images.unsplash.com/photo-1537157228038-4c6ce352d7c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3b4a8d4b1b9e2d6f5b2d7c3a5f5aa5&auto=format&fit=crop&w=500&q=60",
//     description:
//       "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//   },
//   function(err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   }
// );

app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allcampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {
        campgrounds: allcampgrounds
      });
    }
  });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name; // name="name" in new.ejs
  var image = req.body.image; // name="image" in new.ejs
  var desc = req.body.description; // name="description" in new.ejs
  var newCampground = {
    name: name,
    image: image,
    description