const Router = require("express").Router();
const Upload = require("../controller/upload.controller.js");

Router.post("/", Upload.upload);
Router.post("/cloud", Upload.Cloudinary);

module.exports = Router;
