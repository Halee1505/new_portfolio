const Router = require("express").Router();
const FlashCardController = require("../controller/flashcard.controller.js");

Router.get("/", FlashCardController.getFlashCard);
Router.get("/category", FlashCardController.getFlashCardCategory);
Router.get("/category/:category", FlashCardController.getFlashCardByCategory);
Router.get("/:id", FlashCardController.getFlashCardById);
Router.post("/", FlashCardController.createFlashCard);
Router.put("/:id", FlashCardController.updateFlashCard);

module.exports = Router;
