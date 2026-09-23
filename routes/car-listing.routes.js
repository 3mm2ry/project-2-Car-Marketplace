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


 //// to get cars selles page 
router.get("/", async (req, res) => {
    const carListings = await CarListing.find();
    res.render("cars.ejs", { carListings });
});

/// to get cars detail page - after click the car detail url
router.get("/:carId", async (req, res) => {
                                    /// to get the id from url ex:/car-listings/68d123abc
    const carListing = await CarListing.findById(req.params.carId);

    res.render("car-details.ejs", { carListing });
});

////////// git the edit page 
router.get("/:carId/edit", async (req, res) => {
    const carListing = await CarListing.findById(req.params.carId);

    res.render("edit-car.ejs", { carListing });
});
 ///// post the edit  page 
router.put("/:carId", upload.single("image"), async (req, res) => {

    const carListing = await CarListing.findById(req.params.carId);

    carListing.streetAddress = req.body.streetAddress;
    carListing.brand = req.body.brand;
    carListing.model = req.body.model;
    carListing.year = req.body.year;
    carListing.price = req.body.price;
    carListing.mileage = req.body.mileage;
    carListing.description = req.body.description;

/* If the user uploads a new image** - `req.file` exists → update the image.
If no new image is uploaded** - `req.file` does not exist → keep the old image. */

    if (req.file !== undefined) {
        carListing.image = req.file.filename;
    }
     /// save the edit 
    await carListing.save();

    res.redirect(`/car-listings/${carListing._id}`);
});


module.exports = router;