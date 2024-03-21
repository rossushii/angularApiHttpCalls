import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:3001';
  constructor(private http: HttpClient) {}

  // Method to get all Blogs
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.baseUrl}/blogs`).pipe(
      tap((data: Blog[]) => data)
    );
  }
  getBlogById(id: number): Observable<Blog | undefined> {
    return this.http.get<Blog>(`${this.baseUrl}/blogs/${id}`);
  }
}
