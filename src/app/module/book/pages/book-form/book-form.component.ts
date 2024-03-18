import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService // Inject your book service
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'] ? +params['id'] : null;
      if (this.bookId) {
        this.loadBookData(this.bookId);
      } else {
        this.initForm();
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
    const book = this.bookService.getBookById(id);
    if (book) {
      this.bookForm = this.fb.group({
        name: [book.name],
        authors: this.fb.array(book.authors.map(author => this.fb.control(author))),
        isbn: [book.isbn]
      });
    }
  }
  
  get authorForms() {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthor() {
    const author = this.fb.control('');
    this.authorForms.push(author);
  }
  
  saveBook(){
    console.log("Saved!")
  }
}
