const Router = require("express").Router();
const AlexaController = require("../controller/alexa.controller.js");

Router.post("/", AlexaController.request);

module.exports = Router;
