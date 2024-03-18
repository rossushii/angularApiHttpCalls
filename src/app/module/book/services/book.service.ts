import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }
  private books: Book[] = [
    { id: 1, name: 'Book 1', authors: ['Author 1'], isbn: 'ISBN 1' },
    { id: 2, name: 'Book 2', authors: ['Author 2', 'Author 3'], isbn: 'ISBN 2' },
    { id: 3, name: 'Book 3', authors: ['Author 1', 'Author 3'], isbn: 'ISBN 3' }
  ];

  constructor() {}

  // Method to get all books
  getAllBooks(): Book[] {
    return this.books;
  }
}
