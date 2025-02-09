import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-and-blog';

  constructor(private router: Router) {}
  
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
