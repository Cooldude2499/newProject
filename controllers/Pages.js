const Vehicles = require('../models/Vehicles')
const { cloudinary } = require("../cloudinary");

module.exports.home = (req, res) => {
    res.render('index')
}
module.exports.about = (req, res) => {
    res.render('about')
}
module.exports.service = (req, res) => {
    res.render('service')
}
module.exports.electricFleet = async (req, res) => {
    const vehicles = await Vehicles.find();
    // console.log(vehicles[0])
    if (req.session.AdminUser) {
        var currentUser = req.session.AdminUser
    }
    res.render('electric-fleet', { currentUser, vehicles });
}

module.exports.jobs = (req, res) => {
    if (req.session.AdminUser) {
        var currentUser = req.session.AdminUser
    }
    res.render('jobs', { currentUser })
}
module.exports.blog = (req, res) => {
    res.render('blog-standard')
}

module.exports.contact = (req, res) => {
    res.render('contact')
}

module.exports.addNewVehicle = (req, res) => {
    res.render('newVehicle')
}

module.exports.postNewVehicleForm = async (req, res) => {
    const { name, description, image } = req.body
    const vehicle = new Vehicles(req.body)
    vehicle.images = req.files.map((f) => {
        return {
            url: f.path,
            filename: f.filename,
        };
    });
    await vehicle.save()
    res.redirect('/electric-fleet')
}

module.exports.renderEditVehicleForm = async (req, res) => {
    const { id } = req.params;
    const vehicle = await Vehicles.findById(id);
    res.render("editVehicle", { vehicle });
}

module.exports.deleteVehicle = async (req, res) => {
    const { id } = req.params
    // console.log(id)
    await Vehicles.findByIdAndDelete(id)
    res.redirect("/electric-fleet")
}

module.exports.postEditVehicleForm = async (req, res) => {
    const { id } = req.params;
    // const { name, description, image } = req.body
    const vehicle = await Vehicles.findByIdAndUpdate(id, req.body)
    console.log(req.files)
    const imgs = req.files.map((f) => {
        return {
            url: f.path,
            filename: f.filename,
        };
    });
    vehicle.images = [...imgs];
    // campground.save();
    vehicle.save()

    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({
            $pull: { images: { filename: { $in: req.body.deleteImages } } },
        });
    }
    res.redirect("/electric-fleet")
}

module.exports.renderJobDetails = (req, res) => {
    res.render("job-details")
}

module.exports.renderBlogDetails = (req, res) => {
    res.render("blog-details")
}