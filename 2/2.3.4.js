function Book(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;
	this.reader = null;
};

let commands = {
	isAvailable() {
		return this.reader ? false : true
	},

	takeBook(readerName) {
		if(!this.reader) {
			this.reader = readerName
			return true
		}
		else return false
	},

	returnBook() {
		if(this.reader) {
			this.reader = null
			return true
		}
		else return false
	},

	changeBookName(newBookName) {
		if (this.name !== newBookName) {
			this.name = newBookName
			return true
		}
		else return false
		
	},

	changeAuthorName(newAuthorName) {
		if (this.author !== newAuthorName) {
			this.author = newAuthorName
			return true
		}
		else return false
	},

	getCurrentReader() {
		return this.reader
	}
}

Book.prototype = commands;

let bookOne = new Book('Книга 1', 'Автор 1', '2023')
let bookTwo = new Book('Книга 2', 'Автор 2', '2023')