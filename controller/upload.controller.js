const Image = require("../model/image.model.js");
const uploadToCloudinary = require("../service/cloudinary.service.js");
const getFileNamesInFolder = require("../service/getFileName.service.js");
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
          message: err.message || "Some error occurred while creating the image.",
        });
      });
  }
  async Cloudinary(req, res, next) {
    const folderPath = "assets";
    const fileNames = getFileNamesInFolder(folderPath);
    const filePaths = await Promise.all(
      fileNames.map((file) => {
        return uploadToCloudinary(folderPath + "/" + file);
      })
    );
    const img = new Image({
      gallery: "Mừng Halee tốt nghiệpppp",
      path: filePaths,
    });
    img
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
}
module.exports = new Upload();
