import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<Blog[]> {

  constructor(private BlogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog[]> {
    return this.BlogService.getAllBlogs();
  }
}