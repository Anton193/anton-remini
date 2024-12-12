const fs = require("fs");
const path = require("path");
const { remini } = require('../../lib/remini');

const processImage = async (inputFile, outputFile) => {
  if (!inputFile || !fs.existsSync(inputFile)) {
    console.error(`Error: Input file "${inputFile}" does not exist.`);
    return;
  }
  if (!outputFile) {
    const extname = path.extname(inputFile);
    outputFile = `anton_output${extname}`;
  }
  try {
    const image = fs.readFileSync(inputFile);
    const enhancedImage = await remini(image, 'enhance');
    fs.writeFileSync(outputFile, enhancedImage);
    console.log(`Image enhanced successfully! Saved as: ${outputFile}`);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

module.exports = { processImage }