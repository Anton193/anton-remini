#!/usr/bin/env node

const { proces } = require("./utils/process");
const { showUsage, showHelp, showVersion } = require('./utils/show');
const { searchFileProcess } = require('./utils/searchimages');

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  showHelp();
} else if (process.argv.includes('--version') || process.argv.includes('-v')) {
  showVersion();
} else if (process.argv.includes('-S')) {
  searchFileProcess();
} else {
  proces();
}