import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      this.bookId = params['id'] ? +params['id'] : null;
      console.log(this.bookId)
      if (this.bookId) {
        this.loadBookData(this.bookId);
      }
    });
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([]),
      isbn: ['']
    });
  }

  loadBookData(id: number): void {
    this.bookService.getBookById(id).subscribe((book: Book | undefined) => {
      console.log(book)
      if (book) {
        this.bookForm.patchValue({
          name: book.name,
          isbn: book.isbn
        });
        this.clearAuthors();
        book.authors.forEach(author => this.addAuthorFormControl(author));
      } else {
        console.error(`Book with id ${id} not found`);
      }
    });
  }

  get authorForms() {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthorFormControl(author: string): void {
    const authorFormArray = this.bookForm.get('authors') as FormArray;
    authorFormArray.push(this.fb.control(author));
  }

  addAuthor() {
    const author = this.fb.control('');
    this.authorForms.push(author);
  }

  clearAuthors(): void {
    const authorFormArray = this.bookForm.get('authors') as FormArray;
    while (authorFormArray.length !== 0) {
      authorFormArray.removeAt(0);
    }
  }

  saveBook(): void {
    // Handle save logic here
    console.log('Book saved!');
    this.router.navigate(['/book-list']); 
  }
}
