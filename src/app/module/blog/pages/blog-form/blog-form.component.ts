import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss'
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;
  blogId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params['id'] ? +params['id'] : null;
      if (this.blogId) {
        this.loadBlogData(this.blogId);
      } else {
        this.initForm();
      }
    });
  }


  initForm(): void {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    });
  }

  loadBlogData(id: number): void {
    const blog = this.blogService.getBlogById(id);
    if (blog) {
      this.blogForm = this.fb.group({
        title: [blog.title],
        description: [blog.description],
        author: [blog.author],
        comments: this.fb.array(blog.comments.map(comment => this.fb.control(comment))),
      });
    }
  }
  get commentForms() {
    return this.blogForm.get('comments') as FormArray;
  }

  addComment() {
    const comment = this.fb.control('');
    this.commentForms.push(comment);
  }

  saveBlog(){
    console.log('Saved!')
  }
}
