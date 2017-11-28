import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { IUser} from '../nav2/user';
import { IBlog} from './blog';
import {BlogService} from '../blog.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-userblog',
  templateUrl: './userblog.component.html',
  styleUrls: ['./userblog.component.css']
})
export class UserblogComponent implements OnInit {
  Users: IUser[];
  blogs: IBlog[];
  isSelect= 0;
  activeUser: IUser;
  constructor(private req: UserService, private request: BlogService, private router: Router) { }


  ngOnInit() {
    this.request.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
    this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    console.log(this.activeUser);
  }
  deleteBlog(blog) {
    this.request.deleteBlogs(blog).subscribe(data => {
    //  location.reload();
      this.router.navigate(['userblog']);
    });

  }
  // updateBlog(blog) {
  //   this.request.updateblog(blog).subscribe();
  //   location.reload();
  //   this.router.navigate(['userblog']);
  // }
  updateBlog(item) {
    this.isSelect = item.id;
  }
  emitEdit(id, title, body, category, author) {
    const blog = {
      id: id,
      title: title,
      body: body,
      category: category,
      author: author
    };
    this.request.updateblog(blog).subscribe(data => {
      this.router.navigate(['userblog']);
    });
  }
}
