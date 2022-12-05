const Image = require("../model/image.model.js");

class Img {
  index(req, res, next) {
    Image.find({}, function (err, key) {
      if (!err) res.send(key);
      else {
        res.json("error");
      }
    });
  }
  findAlbum(req, res, next) {
    Image.findById(req.params.id, function (err, key) {
      if (!err) res.send(key);
      else {
        res.json("error");
      }
    });
  }
}
module.exports = new Img();
