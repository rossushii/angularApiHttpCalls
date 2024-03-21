import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book[]> {

  constructor(private bookService: BookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
    return this.bookService.getAllBooks();
  }
}