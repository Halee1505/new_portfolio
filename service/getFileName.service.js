const fs = require("fs");

function getFileNamesInFolder(folderPath) {
  try {
    // Read the contents of the folder
    const files = fs.readdirSync(folderPath);

    // Filter out directories (if any)
    const fileNames = files
      .filter((file) => fs.statSync(`${folderPath}/${file}`).isFile())
      .filter((file) => file !== ".DS_Store");

    return fileNames;
  } catch (error) {
    console.error("Error reading folder:", error.message);
    throw error;
  }
}

// Example usage
module.exports = getFileNamesInFolder;
