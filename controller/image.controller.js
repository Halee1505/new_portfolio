const Image = require("../model/image.model.js");

class Img {
  index(req, res, next) {
    //find and reverse the order of the images
    Image.find({}, function (err, key) {
      if (!err) {
        const data = key.map((item) => {
          return {
            _id: item._id,
            gallery: item.gallery,
            thumbnailUrl: item.path[0],
          };
        });
        res.send(data.reverse());
      } else {
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
