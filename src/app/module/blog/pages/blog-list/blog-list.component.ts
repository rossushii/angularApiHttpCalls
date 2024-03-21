import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../model/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private router: Router, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.blogs = data['blogs'];
    });
  }
  handleAddBlog() {
    console.log('Add Blog button clicked in BlogListComponent');
  }

  handleDeleteAll() {
    console.log('Delete All button clicked in BlogListComponent');
  }
  
  edit(id:number): void {
    console.log('Editing blog',id);
    this.router.navigate(['/blog/form', id]);
  }
}
