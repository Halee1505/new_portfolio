const myMoneyDb = require("./my_money.db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  avatar: String,
  created_at: String,
  updated_at: String,
});
const Category = new Schema({
  name: String,
  icon: String,
});
const Location = new Schema({
  city: String,
  country: String,
  district: String,
  isoCountryCode: String,
  name: String,
  postalCode: String,
  region: String,
  street: String,
  streetNumber: String,
  subregion: String,
  timezone: String,
  latitude: Number,
  longitude: Number,
});
const Transaction = new Schema({
  note: String,
  amount: Number,
  image: String,
  category: Category,
  location: Location,
  user: User,
  created_at: String,
  updated_at: String,
});

const TransactionModel = myMoneyDb.model("Transaction", Transaction);
const CategoryModel = myMoneyDb.model("Category", Category);
const LocationModel = myMoneyDb.model("Location", Location);
const UserModel = myMoneyDb.model("User", User);

module.exports = {
  TransactionModel,
  CategoryModel,
  LocationModel,
  UserModel,
};