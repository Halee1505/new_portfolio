const FlashCard = require("../model/flashcard.model");
const flashcardCategory = require("../model/flashcardCategory.model");
class FlashCardController {
    getFlashCard(req, res, next) {
        FlashCard.find({}, function (err, key) {
            if (!err) {
                const data = key.map((item) => {
                    return {
                        _id: item._id,
                        word: item.word,
                        meaning: item.meaning,
                        word_region: item.word_region,
                        meaning_region: item.meaning_region,
                        category: item.category,
                    };
                });
                res.send(data);
            } else {
                res.json("error");
            }
        });
    }

    getFlashCardCategory(req, res, next) {
        flashcardCategory.find({}, function (err, key) {
            if (!err) {
                const data = key.map((item) => {
                    return {
                        _id: item._id,
                        name: item.name,
                    };
                });
                res.send(data);
            } else {
                res.json("error");
            }
        });
    }

    getFlashCardByCategory(req, res, next) {
        FlashCard.find({ category: req.params.category }, function (err, key) {
            if (!err) {
                const data = key.map((item) => {
                    return {
                        _id: item._id,
                        word: item.word,
                        meaning: item.meaning,
                        word_region: item.word_region,
                        meaning_region: item.meaning_region,
                        category: item.category,
                    };
                });
                res.send(data);
            } else {
                res.json("error");
            }
        });
    }

    getFlashCardById(req, res, next) {
        FlashCard.findById(req.params.id, function (err, key) {
            if (!err) res.send(key);
            else {
                res.json("error");
            }
        });
    }

    createFlashCard(req, res, next) {
        const flashcard = new FlashCard({
            word: req.body.word,
            meaning: req.body.meaning,
            word_region: req.body.word_region,
            meaning_region: req.body.meaning_region,
            category: req.body.category,
        });
        flashcard
            .save()
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the image.",
                });
            });
    }

    updateFlashCard(req, res, next) {
        FlashCard.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, key) {
            if (!err) res.send(key);
            else {
                res.json("error");
            }
        });
    }



}

module.exports = new FlashCardController();