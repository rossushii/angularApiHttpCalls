import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
  @Output() deleteAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() addBlog: EventEmitter<void> = new EventEmitter<void>();
  @Output() addBook: EventEmitter<void> = new EventEmitter<void>();
  @Input() showAddBlog: boolean = true;
  @Input() showAddBook: boolean = true;

  constructor(private router: Router) {}

  onAddBlog() {
    this.addBlog.emit();
    this.router.navigate(['/blog/form']);
  }

  onAddBook() {
    this.addBook.emit();
    this.router.navigate(['/book/form']);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }
}
