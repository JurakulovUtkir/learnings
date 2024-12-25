//BooksController nomli class yaratilsin va unda
// Berilgan API orqali barcha kitoblar olib kelinsin

// API:   https://www.freetestapi.com/api/v1/books

// methodlar:
//  - getAllBooks()
//  - getSingleBookById(id) -> topilmasa 404
//  - getSingleBookByName(title) -> topilmasa 404
//  - searchBooks(title)
//  - filterBooks(title, author, publication_year, genre)
//  - sortBooks ("DESC" | "ASC", tanlov) -> tanlov : publication_year, genre, author

// import axios
import axios from "../../node_modules/axios/dist/esm/axios.js";

class BooksController {
  constructor(books = []) {
    this.books = books;
  }

  // API-dan barcha kitoblar olib kelish
  async getAllBooks() {
    const res = await axios.get("https://www.freetestapi.com/api/v1/books");
    this.books = res.data;
    return this;
  }

  // id orqali bir kitobni topish
  getSingleBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  // title orqali bir kitobni topish
  getSingleBookByName(title) {
    return this.books.find((book) => book.title === title);
  }

  // title orqali qisqacha bo'lish
  searchBooks(title) {
    return this.books.filter((book) => book.title.includes(title));
  }

  //filter books by year
  async filterBooksByYear(year) {
    return this.books.filter((book) => book.publication_year >= year);
  }
}

const data = new BooksController();

console.log(await data.getAllBooks().filterBooksByYear(1990));
