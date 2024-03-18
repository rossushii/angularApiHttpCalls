import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];
  constructor(private router: Router, private bookService: BlogService) { }


  ngOnInit(): void {
    this.blogs = this.bookService.getAllBlogs();
  }
  handleAddBlog() {
    console.log('Add Blog button clicked in BlogListComponent');
  }

  handleDeleteAll() {
    console.log('Delete All button clicked in BlogListComponent');
  }
  
  edit(id:number): void {
    console.log('Editing book', this.bookService.getBlogById(id));
    this.router.navigate(['/blog/form', id]);
  }
}
