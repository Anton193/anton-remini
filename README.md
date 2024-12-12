# anton-remini

**anton-remini** is a powerful CLI tool to enhance image quality using advanced image processing techniques. This tool improves photo resolution and clarity, making images sharper and of higher quality.

## Features

- **Multi-format support**: Works with various image formats, including **JPG**, **JPEG**, **PNG**, and **WEBP**.
- **Single Image Enhancement**: Enhance a single image with ease.
- **Batch Processing**: Process entire folders of images automatically.
- **File Search**: Search for images in specific directories for easy processing.
  
## Installation

You can download and install **anton-remini** by following the steps below:

1. Download the latest version of **anton-remini** from the [releases page](https://github.com/Anton193/anton-remini/archive/refs/tags/v1.0.1.tar.gz).
2. Follow the installation instructions for your platform (Linux, macOS, or Windows).

Alternatively, you can clone the repository and build the tool from source:

```bash
git clone https://github.com/Anton193/anton-remini.git
cd anton-remini
npm install
make run <FILE_NAME>
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

## Report Bugs

If you encounter any bugs or issues with **anton-remini**, please follow the guidelines below to report them effectively:

### Steps to Report a Bug:
1. **Describe the Issue Clearly**: Provide a detailed description of the problem. Include what you were trying to do, and what went wrong.
   
2. **Provide System Information**: Include details about the system you're using, such as the version of Node.js, operating system, and anton-remini version.

3. **Attach Error Logs**: If you receive any error messages or logs, please attach them to the bug report. This will help identify the issue faster.

4. **Steps to Reproduce (Optional)**: If possible, provide the steps or commands that lead to the error. This helps to reproduce and investigate the bug.

### Example Bug Report:
```plaintext
**Issue Description**: When I run the command `hd foto.jpg output.jpg`, I receive the error "File not found."

**System Information**:
- Node.js version: 16.3.0
- Operating System: Android 12
- anton-remini version: 1.0.1

**Steps to Reproduce**:
1. Run the command `hd foto.jpg output.jpg`.
2. Error message appears: "File not found."

**Error Log**: (Attach the error log if available)
```
### How to Contact:

Email: [AntonThomzz](antonthomzz@gmail.com)

Or use the [GitHub Issue Tracker](https://github.com/Anton193/anton-remini/issues). to open a new issue.


By following these steps, you help us understand and address the issue more effectively. Thank you for your contribution!