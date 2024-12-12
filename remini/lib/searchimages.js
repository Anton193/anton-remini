const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { processImage } = require('./proccesImage');

const searchFiles = (directory, targetFile, results = []) => {
  try {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        searchFiles(filePath, targetFile, results);
      } else if (stats.isFile() && file === targetFile) {
        results.push(filePath);
      }
    }
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
  return results;
};

const searchFileProcess = () => {
  const filename = process.argv[process.argv.indexOf('-S') + 1];
  if (!filename) {
    console.error('Error: Please specify the file name you want to search for.');
    process.exit(1);
  }

  console.log(`Searching for file "${filename}" in /storage/emulated/0 ...`);
  try {
    const results = searchFiles('/storage/emulated/0', filename);
    if (results.length === 0) {
      console.log('No files found in /storage/emulated/0');
      process.exit(1);
    }
    console.log('Files found:');
    results.forEach((filePath, index) => {
      console.log(`${index + 1}. ${filePath}`);
    });

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Enter the number of the file you want to process: ', async (answer) => {
      const index = parseInt(answer) - 1;
      if (index >= 0 && index < results.length) {
        const selectedFile = results[index];
        const outputFile = path.join(path.dirname(selectedFile), `output_${path.basename(selectedFile)}`);
        rl.question('Do you want to continue with processing this file? (Y/N) ', async (confirm) => {
          if (confirm.toLowerCase() === 'y') {
            await processImage(selectedFile, outputFile);
            console.log(`Image processed and saved as ${outputFile}`);
          } else {
            console.log('Process canceled.');
          }
          rl.close();
        });
      } else {
        console.log('Invalid selection.');
        rl.close();
      }
    });
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

module.exports = { searchFileProcess };