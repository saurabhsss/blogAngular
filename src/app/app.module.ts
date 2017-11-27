import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { LoginComponent } from './login/login.component';
import { UserblogComponent } from './userblog/userblog.component';
import { CreateblogComponent } from './createblog/createblog.component';
import {BlogService} from './blog.service';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Nav1Component,
    Nav2Component,
    AllblogsComponent,
    LoginComponent,
    UserblogComponent,
    CreateblogComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'nav1', component: Nav1Component},
      {path: 'nav2', component: Nav2Component},
      {path: 'all', component: AllblogsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'nav2', component: Nav2Component},
      {path: 'userblog', component: UserblogComponent},
      {path: 'create', component: CreateblogComponent},
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      {path: 'category', component: FavouriteComponent}
    ])
  ],
  providers: [BlogService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
