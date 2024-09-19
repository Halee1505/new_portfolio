const Router = require("express").Router();

const MyMoneyController = require("./my_money.controller");
Router.post("/transactions", MyMoneyController.getTransactions);
Router.post("/transactions/new", MyMoneyController.newTransaction);

module.exports = Router;
