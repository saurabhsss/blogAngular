import { Component, OnInit } from '@angular/core';
import { IBlog} from '../userblog/blog';
import { BlogService} from '../blog.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  blogs: IBlog[];
  constructor(private req: BlogService) { }
  blog = localStorage.getItem('tag');
  ngOnInit() {
    console.log('-->favourite comp:' + this.blog);
    this.req.getfavourite(this.blog).subscribe(blogs => this.blogs = blogs);
  }

}
