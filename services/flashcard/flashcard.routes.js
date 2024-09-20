const Router = require("express").Router();
const FlashCardController = require("./flashcard.controller.js");

Router.get("/", FlashCardController.getFlashCard);
Router.get("/category", FlashCardController.getFlashCardCategory);
Router.get("/category/:id", FlashCardController.getCategoryById);
Router.get(
  "/by-category/:category",
  FlashCardController.getFlashCardByCategory
);
Router.get("/:id", FlashCardController.getFlashCardById);
Router.post("/", FlashCardController.createFlashCard);
Router.post("/category", FlashCardController.createCategory);
Router.put("/:id", FlashCardController.updateFlashCard);

module.exports = Router;
