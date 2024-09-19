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

const TransactionModel = mongoose.model("MyMoney.Transaction", Transaction);
const CategoryModel = mongoose.model("MyMoney.Category", Category);
const LocationModel = mongoose.model("MyMoney.Location", Location);
const UserModel = mongoose.model("MyMoney.User", User);

module.exports = {
  TransactionModel,
  CategoryModel,
  LocationModel,
  UserModel,
};