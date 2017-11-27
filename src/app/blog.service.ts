///<reference path="../../node_modules/@angular/common/http/src/client.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IBlog } from './userblog/blog';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogService {
  private blogUrl = 'https://json-server-heroku-ccwkxwccql.now.sh/blogs';
  private cateUrl = 'https://json-server-heroku-ccwkxwccql.now.sh/blogs?category=';

  // private blogUrl= 'http://localhost:3006/blogs';
  // private cateUrl = 'http://localhost:3006/blogs?category=';

  constructor(private http: HttpClient) { }
  getBlogs(): Observable<IBlog[]> {
    console.log('in blog service');
    return this.http.get<IBlog[]>(this.blogUrl);
  }

  postBlogs(newBlog: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(this.blogUrl, newBlog);
  }
  deleteBlogs(data): Observable<any> {
    console.log(data.id);
    return this.http.delete(this.blogUrl + '/' + data.id);
   // return this.http.delete(this.blogUrl + '/' + data.id);
  }
  updateblog(data) {
    return this.http.patch(this.blogUrl + '/' +  data.id, data);
  }
  getfavourite(data): Observable<IBlog[]> {
    console.log(data);
    return this.http.get<IBlog[]>(this.cateUrl + data);
  }
}
