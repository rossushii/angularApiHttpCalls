import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) {}

  // Method to get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`).pipe(
      tap((data: Book[]) => console.log('Server response:', data))
    );
  }
  getBookById(id: number): Observable<Book | undefined> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }
}

