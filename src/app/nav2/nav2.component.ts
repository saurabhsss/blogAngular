import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { UserService} from '../user.service';
import { IUser} from './user';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
  Users: IUser[];
  activeUser: IUser;
  constructor(private router: Router, private userservice: UserService) { }
  button = ['life', 'Tech', 'Inspiration'];
  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.Users = data;
      this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    });
  }
  func (item) {
    console.log('------------------------------------------' + item);
    localStorage.setItem('tag', item);
   // location.reload();
    this.router.navigate(['category']);
  }
  Logout() {
    // if (this.activeUser) {
    //   this.activeUser.status = false;
    // }
    // this.userservice.changeActive(this.activeUser).subscribe();
    // location.reload();
    // this.router.navigate(['all']);
    localStorage.removeItem('activeUser');
    this.router.navigate(['all']);
  }
}
