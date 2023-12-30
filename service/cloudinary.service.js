const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Function to upload an image to Cloudinary
async function uploadToCloudinary(imagePath) {
  try {
    const result = await cloudinary.uploader
      .upload(imagePath, {
        folder: "NTgrasses",
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
    throw error;
  }
}
module.exports = uploadToCloudinary;
// Example usage
// const imagePath = "../test.jpg";
// uploadToCloudinary(imagePath);
