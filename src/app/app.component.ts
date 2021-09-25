import { Component } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { AuthGuard } from './services/user/auth.guard';
import { LayoutRules } from './utils/layoutRules';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fireBaseUser: User;
  public appPages = [
    { title: 'home', url: '/home', icon: 'home', hidden: LayoutRules.loggedIn },
    {
      title: 'Login',
      url: '/login',
      icon: 'person',
      hidden: LayoutRules.loggedOut,
    },
    {
      title: 'register',
      url: '/register',
      icon: 'add',
      hidden: LayoutRules.loggedOut,
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person',
      hidden: LayoutRules.loggedIn,
    },
  ];
  constructor() {
    getAuth().onAuthStateChanged((user) => {
      this.fireBaseUser = user;
    });
  }
  menuManagement(hidden: LayoutRules): boolean {
    if (this.fireBaseUser) {
      switch (hidden) {
        case LayoutRules.loggedIn:
          return true;
        case LayoutRules.open:
          return true;
        case LayoutRules.loggedOut:
          return false;
        default:
          return false;
      }
    } else {
      switch (hidden) {
        case LayoutRules.loggedIn:
          return false;
        case LayoutRules.open:
          return true;
        case LayoutRules.loggedOut:
          return true;
        default:
          return false;
      }
    }
  }
}
