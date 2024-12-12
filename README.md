# anton-remini

**anton-remini** is a powerful CLI tool to enhance image quality using advanced image processing techniques. This tool improves photo resolution and clarity, making images sharper and of higher quality.

## Features

- **Multi-format support**: Works with various image formats, including **JPG**, **JPEG**, **PNG**, and **WEBP**.
- **Single Image Enhancement**: Enhance a single image with ease.
- **Batch Processing**: Process entire folders of images automatically.
- **File Search**: Search for images in specific directories for easy processing.
  
## Installation

You can download and install **anton-remini** by following the steps below:

1. Download the latest version of **anton-remini** from the [releases page](https://github.com/Anton193/anton-remini/releases).
2. Follow the installation instructions for your platform (Linux, macOS, or Windows).

Alternatively, you can clone the repository and build the tool from source:

```bash
git clone https://github.com/Anton193/anton-remini.git
cd anton-remini
npm install
make run <NAME_IMAGES>
```

## Usage

The basic usage of the tool is:

```
hd [<INPUT> <OUTPUT>]
     [-S]
     [-h | --help]
     [-v | --version]
```

### Options:
- `--help, -h`: Show this help message and usage information.
- `--version, -v`: Show the version of the tool.
- `-S <filename>`: Search for an image file by name in `/storage/emulated/0`. If found, you will be prompted to continue processing the image.

### Examples

#### Enhance a single image:
```bash
hd input.jpg output.jpg
```
Enhance `input.jpg` and save it as `output.jpg`.

#### Search for an image and process it:
```bash
hd -S foto.jpg
```
Search for `foto.jpg` in `/storage/emulated/0`. If found, process the image.

#### Display version and help:
```bash
hd --version
```
Show the version of the **anton-remini** tool.

```bash
hd --help
```
Display this help message with usage instructions.

## Supported Formats

- **JPG** (.jpg)
- **JPEG** (.jpeg)
- **PNG** (.png)
- **WEBP** (.webp)

## Why Use anton-remini?

- **Batch Processing**: Enhance multiple images in one command.
- **Multi-Format Support**: Works with JPG, JPEG, PNG, and WEBP files.
- **Easy CLI Usage**: User-friendly commands with automatic file naming.
- **File Search**: Easily locate and process files from `/storage/emulated/0`.

Enjoy enhancing your images with **anton-remini**! 🚀
