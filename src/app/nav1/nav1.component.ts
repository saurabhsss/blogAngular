import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  constructor(private req: Router) { }

  ngOnInit() {
  }
  loginpage() {
    this.req.navigate(['login']);
  }
}
