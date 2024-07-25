const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashCardCategory = new Schema({
    name: {
        type: String,
    },
});

module.exports = mongoose.model("FlashCardCategory", FlashCardCategory)