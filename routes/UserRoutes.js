const express = require("express");
const passport = require("passport");
const router = express.Router();
const { home, about, service, blog, jobs, contact, renderJobDetails, renderBlogDetails } = require('../controllers/Pages');
const { getLoginForm, postLoginForm } = require('../controllers/User');
// const { isAuthenticated } = require('../Middlewares/Middlewares')
// const multer = require("multer");
// const { storage } = require("../cloudinary/index");
// const upload = multer({ storage });

router
    .route("/")
    .get(home)

router
    .route('/about')
    .get(about)

router
    .route('/services')
    .get(service)


router
    .route('/jobs')
    .get(jobs)

router
    .route('/blogs')
    .get(blog)

router
    .route('/contact')
    .get(contact)

router
    .route('/job-details')
    .get(renderJobDetails)

router
    .route('/blog-details')
    .get(renderBlogDetails)



module.exports = router