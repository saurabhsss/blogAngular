import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { IUser} from '../nav2/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  Users: IUser[];
  activeUser: IUser;
  constructor(private request: UserService) { }

  ngOnInit(): void {
  }
  login() {
    const user = localStorage.getItem('activeUser');
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
