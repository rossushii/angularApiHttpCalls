import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  
  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.books = data['books'];
    });
  }

  handleAddBook() {
    console.log('Add Book button clicked in BookListComponent');
  }

  handleDeleteAll() {
    console.log('Delete All button clicked in BookListComponent');
  }

  edit(id: number): void {
    console.log('Editing book with id:', id);
    this.router.navigate(['/book/form', id]);
  }
}
console.log('star')