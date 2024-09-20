const PortfolioImageModel = require("./portfolio.model.js");

class PortfolioController {
  index(req, res, next) {
    //find and reverse the order of the images
    PortfolioImageModel.find({}, function (err, key) {
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
    PortfolioImageModel.findById(req.params.id, function (err, key) {
      if (!err) res.send(key);
      else {
        res.json("error");
      }
    });
  }
}
module.exports = new PortfolioController();
