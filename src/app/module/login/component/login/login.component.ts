import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          // Successful login
          this.router.navigate(['/blog']);
          console.log('logged')
        },
        (error) => {
          // Failed login
          this.errorMessage = 'Invalid username or password.';
        }
      );
  }
}
