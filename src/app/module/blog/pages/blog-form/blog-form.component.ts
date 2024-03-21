import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../model/blog';
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
    this.initForm();
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
    this.blogService.getBlogById(id).subscribe((blog: Blog | undefined) => {
      if (blog) {
        this.blogForm.patchValue({
          title: blog.title,
          description: blog.description,
          author: blog.author,
        });

        const commentsArray = this.blogForm.get('comments') as FormArray;
        commentsArray.clear();
        blog.comments.forEach(comment => {
          commentsArray.push(this.fb.control(comment));
        });
      } else {
        console.error(`Blog with id ${id} not found`);
      }
    });
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
