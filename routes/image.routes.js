const Router = require("express").Router();

const Img = require("../controller/image.controller.js");

Router.get("/", Img.index);
Router.get("/:id", Img.findAlbum);

module.exports = Router;
