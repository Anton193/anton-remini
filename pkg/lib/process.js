const { processImage } = require('./proccesImage');
const { showUsage } = require('./show');

const proces = () => {
  const inputFile = process.argv[2];
  let outputFile = process.argv[3];
  if (inputFile) {
    processImage(inputFile, outputFile)
      .catch((error) => console.error(error.message || error));
  } else {
    showUsage();
  }
}

module.exports = { proces };