import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  constructor(private router: Router, private bookService: BookService) { }


  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }
  handleAddBook() {
    console.log('Add Book button clicked in BookListComponent');
  }

  handleDeleteAll() {
    console.log('Delete All button clicked in BookListComponent');
  }

  edit(id:number): void {
    // Implement edit logic here, you can emit an event to the parent component
    console.log('Editing book', this.bookService.getBookById(id));
    this.router.navigate(['/book/form', id]);
  }
}
