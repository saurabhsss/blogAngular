import { Component, OnInit } from '@angular/core';
import { IBlog } from '../userblog/blog';
import { BlogService } from '../blog.service';
import {UserService} from '../user.service';
import {IUser} from '../nav2/user';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  blogs: IBlog[];
  currentBlog: IBlog;
  Users: IUser[];
  activeUser: IUser;
  user1: IUser;
  user2: IUser;
  constructor(private request: BlogService, private user: UserService) {
  }

  ngOnInit() {
    this.request.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

  favorite(id) {
    this.user2 = JSON.parse(localStorage.getItem('activeUser'));
    console.log(this.user2);
    this.user2.favourite.push(id);
    this.user.changeActive(this.user2).subscribe();
  //  this.user.changeActive()
  }
  check() {
    this.user1 = JSON.parse(localStorage.getItem('activeUser'));
    if (this.user1) {
      return true;
    } else {
      return false;
    }
  }
}
