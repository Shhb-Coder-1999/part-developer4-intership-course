class reader  {
    static #id = 0
    #BookList_length = 0 
    BookLists = []

    constructor(name, age , gender) {
            reader.#id ++
            this.name = name;
            this.age = age;
            this.gender = gender
      }

     createBookList(bookList){
        if (this.#BookList_length >= 5) throw new Error (`only allow to have 5 booklist`)
        this.#BookList_length ++
        const Lib = new BookList(this);
        bookList.map((book) => Lib.add(book));
        this.BookLists.push(Lib)
     }
     removeBookList(id){
        this.BookLists.splice(this.BookLists.findIndex(object => { return object._id === id}),1)
     }

     Show_BookList(){
        console.log(this.BookLists)
     }

     get_BookList(){
        return this.BookLists
     }

     Show_BookList_length(){
        console.log(this.#BookList_length)
     }

}

module.exports = reader
const BookList = require('./BookList') 