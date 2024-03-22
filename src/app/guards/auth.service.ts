import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>('http://localhost:3000/auth/login', { username, password })
      .pipe(
        map(data => {
          if (data && data.token) {
            localStorage.setItem('token', '0123456789');
            this.loggedIn = true;
            return true;
          }
          return false;
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
