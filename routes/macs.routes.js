const Router = require("express").Router();

const Macs = require("../controller/macs.controller.js");

Router.get("/songs", Macs.index);
Router.post("/vote/:id", Macs.vote);
Router.post("/unvote/:id", Macs.unVote);
Router.post("/user", Macs.userVote);

module.exports = Router;
