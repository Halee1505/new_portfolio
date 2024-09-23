const Router = require("express").Router();

const MyMoneyController = require("./my_money.controller");
Router.post("/login", MyMoneyController.login);
Router.post("/user", MyMoneyController.createUser);
Router.post("/transactions", MyMoneyController.getTransactions);
Router.post("/transactions/new", MyMoneyController.newTransaction);
Router.get("/categories", MyMoneyController.getCategories);

module.exports = Router;
