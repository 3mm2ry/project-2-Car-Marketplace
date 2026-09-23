const router = require("express").Router();
const CarListing = require("../models/CarListing");
const upload = require("../middleware/upload");
const isSignedIn = require("../middleware/is-signed-in");


// get     car-listings/new 
router.get("/new", (req, res) => {

   res.render("new-car.ejs");

});


///// submit the form
                                // git one image only 
router.post("/",isSignedIn, upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const carListing = await CarListing.create({
    streetAddress: req.body.streetAddress,
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    mileage: req.body.mileage,
    description: req.body.description,
    // save the path of  the image 
 image: req.file.filename,
      // user id 
    owner: req.session.user._id,
});
res.redirect("/car-listings");

});

