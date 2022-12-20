const reader = require('./Reader')
const Book = require('./Book')
const BookList = require('./BookList') 

const person1 = new reader('shahab',22,'male')

const Book1 = new Book("Book1", "novel", "ali ahamadi");
const Book2 = new Book("Book2","islamic","reza delavar");
const Book3 = new Book( "Book3","comic","ahmad movahed");
const Book4 = new Book("Book4", "navel", "shahab shafie");
const Book5 = new Book("Book5", "islamic", "afsane rezayi");
const Book6 = new Book("Book6", "comic", "mina seyedi");
const bookList = [Book1, Book2, Book3, Book4, Book5, Book6];

 
person1.createBookList(bookList)
// person1.createBookList(bookList)
// person1.createBookList(bookList)
// person1.createBookList(bookList)
// person1.createBookList(bookList)
// person1.createBookList(bookList)
// person1.createBookList(bookList)


person1.Show_BookList()
person1.Show_BookList_length()
person1.get_BookList()[0].finishCurrentBook()
person1.removeBookList(0)
person1.Show_BookList()

