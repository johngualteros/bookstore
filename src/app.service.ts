import { Injectable } from '@nestjs/common';
import { BookDTO } from './books/book.dto';

let bookStore = [];

@Injectable()
export class AppService {
  getBookById(id: string) {
    return bookStore.find(book => book.id === id);
  }

  getAllBooks() {
    return bookStore;
  }

  addBook(book: BookDTO) {
    const exists = bookStore.find((b: BookDTO) => {
      return b.title == book.title &&
        b.author == book.author &&
        b.release_date == book.release_date;
    })

    if (exists) return false;
    book.id = "Book_" + (bookStore.length + 1);
    bookStore.push(book);
    return book.id;
  }
}
