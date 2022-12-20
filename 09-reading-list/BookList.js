const Book = require("./Book")

class BookList  {
    static #_id = 0
    static #id = 0
    constructor(user) {
        this.readBooks = 0
        BookList.#_id = ++ BookList.#id
        this.UnreadBooks = 0
        this.user = user
        this.allBooks = [];
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
      }

      add(book) {
        this.UnreadBooks++
        this.allBooks.push(book);
        if (this.allBooks.length == 1) this.currentBook = this.allBooks[0]  
      }
      
      finishCurrentBook() {
         if (this.currentBook.read != true ){
          this.currentBook.read = true;
          this.currentBook.endReadDate = new Date(Date.now());
          this.lastBook = this.currentBook;
          this.allBooks.shift(this.currentBook);
          this.allBooks.push(this.currentBook);
          this.nextBook = this.allBooks[1];
          this.currentBook = this.allBooks[0];
          this.UnreadBooks--;
          this.readBooks++;
         }
         else {
          console.log("You read all books of this bookList !!!")
         }

        }
      
}

module.exports = BookList
