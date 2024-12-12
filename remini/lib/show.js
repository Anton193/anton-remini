const Usage = `Usage: hd [<INPUT> <OUTPUT>]
          [-S] 
          [-h | --help]
          [-v | --version]

Commands:
  hd <input_file.jpg> <output_file.jpg>    Enhance image and save to output file
  hd -S <filename>                         Search for the image file in /storage/emulated/0 and process it
  hd --help, -h                            Show help message
  hd --version, -v                         Show version information`;

const helpMessage = `anton-remini - A powerful CLI tool to enhance image quality using advanced image processing techniques.

anton-remini supports various image formats, including **JPG, JPEG, PNG, and WEBP**, making it versatile and easy to use. 
It allows you to enhance single images, search for images in specific directories, and process entire folders of images automatically.

Usage: hd [<INPUT> <OUTPUT>]
          [-S] 
          [-h | --help]
          [-v | --version]

Options:
  --help, -h        Show this help message and usage information
  --version, -v     Show the version of the tool
  -S <filename>     Search for an image file by name in /storage/emulated/0. 
                    If found, you will be prompted to continue processing the image.

Examples:
Enhance a single image:
      hd input.jpg output.jpg      ⟶ Enhance 'input.jpg' and save it as 'output.jpg'

Search for an image and process it:
      hd -S foto.jpg               ⟶ Search for 'foto.jpg' in /storage/emulated/0. If found, process the image.

Display version and help:
      hd --version                 ⟶ Show the version of the anton-remini tool
      hd --help                    ⟶ Display this help message with usage instructions

Supported Formats:
    - JPG (.jpg)  
    - JPEG (.jpeg)  
    - PNG (.png)  
    - WEBP (.webp)  

Why Use anton-remini?
    - Batch Processing:          Enhance multiple images in one command.  
    - Multi-Format Support:      Works with JPG, JPEG, PNG, and WEBP files.  
    - Easy CLI Usage:            User-friendly commands with automatic file naming.  
    - File Search:               Easily locate and process files from /storage/emulated/0.  

Enjoy enhancing your images with anton-remini! 🚀`;

const version = 'anton-remini version 1.0.1';

module.exports = {
  showUsage: () => { 
    console.log(Usage); 
    process.exit(1);
  },
  showHelp: () => { 
    console.log(helpMessage); 
    process.exit(1);
  },
  showVersion: () => { 
    console.log(version); 
    process.exit(1);
  }
};