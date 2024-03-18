import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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