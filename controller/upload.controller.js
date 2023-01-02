const Image = require("../model/image.model.js");

class Upload {
  upload(req, res, next) {
    const img = new Image({
      gallery: req.body.gallery,
      path: req.body.path,
    });
    img
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the image.",
        });
      });
  }
}
module.exports = new Upload();
