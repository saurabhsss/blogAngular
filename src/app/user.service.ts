import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {IUser} from './nav2/user';

@Injectable()
export class UserService {
  private userUrl = 'https://json-server-heroku-ccwkxwccql.now.sh/users';
  //private userUrl= 'http://localhost:3006/users'
  constructor(private req: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    console.log('in user service');
    return this.req.get<IUser[]>(this.userUrl);
  }

  changeActive(item) {
    return this.req.patch(this.userUrl + '/' + item.id, item);
  }
}
