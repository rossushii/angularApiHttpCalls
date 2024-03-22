import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookResolver } from './resolver/book.resolver';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    resolve: { books: BookResolver } 
  },
  {
    path: 'form',
    component: BookFormComponent
    
  },
  { path: 'form/:id',
    component: BookFormComponent
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
