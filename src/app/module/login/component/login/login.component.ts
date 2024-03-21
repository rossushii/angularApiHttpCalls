import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    this.http.post<any>('http://localhost:3000/users', { username: this.username, password: this.password })
      .subscribe(
        () => {
          // Successful login
          this.router.navigate(['/blog']);
        },
        (error) => {
          // Failed login
          this.errorMessage = 'Invalid username or password.';
        }
      );
  }
}
