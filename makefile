# Menyimpan nama file skrip
TARGET = pkg/anton-remini.js

# Menampilkan bantuan
help:
	@echo "Usage: make run [<INPUT> <OUTPUT>]"
	@echo "          [-S]"
	@echo "          [-h | --help]"
	@echo "          [-v | --version]"
	@echo ""
	@echo "Options:"
	@echo "  --help, -h        Show this help message and usage information"
	@echo "  --version, -v     Show the version of the tool"
	@echo "  -S <filename>     Search for an image file by name in /storage/emulated/0."
	@echo "                    If found, you will be prompted to continue processing the image."

# Target untuk menjalankan skrip dengan argumen
run:
	node $(TARGET) $(wordlist 2, $(words $(MAKECMDGOALS)), $(MAKECMDGOALS))

# Target untuk instalasi
install:
	@echo "Installing modules..."
	npm install