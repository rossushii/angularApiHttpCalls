import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', loadChildren: () => import('./module/blog/blog.module').then(m => m.BlogModule) },
  { path: 'book', loadChildren: () => import('./module/book/book.module').then(m => m.BookModule) },
  { path: 'profile', loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}