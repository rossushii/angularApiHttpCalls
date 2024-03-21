import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogResolver } from './resolver/blog.resolver';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    resolve: {blogs:BlogResolver}
  },
  {
    path: 'form',
    component: BlogFormComponent
  },
  {
    path: 'form/:id',
    component: BlogFormComponent,
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
