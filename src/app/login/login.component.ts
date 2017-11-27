import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {IUser} from '../nav2/user';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Users: IUser[];
  activeUser: IUser;
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.Users = data;
    });
  }
  Login(username, password) {
    this.activeUser = this.Users.find(u => u.username === username && u.password === password);
  //  console.log(this.activeUser);
    if (this.activeUser) {
      localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
      // location.reload();
      this.router.navigate(['userblog']);
    } else {
      alert('Invalid Username or Password');
    }

  }
}
