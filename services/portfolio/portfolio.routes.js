const Router = require("express").Router();
const PortfolioController = require("./portfolio.controller.js");

Router.get("/", PortfolioController.index);
Router.get("/:id", PortfolioController.findAlbum);

module.exports = Router;
