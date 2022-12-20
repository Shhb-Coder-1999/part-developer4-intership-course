const BookList = require('./BookList')

class Book  {
    constructor(title, genre, author) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = false;
    }
  }

module.exports = Book
