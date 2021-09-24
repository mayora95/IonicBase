import { Component } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { AuthGuard } from './services/user/auth.guard';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fireBaseUser: User;
  public appPages = [
    { title: 'home', url: '/home', icon: 'home', hidden: true },
    { title: 'login', url: '/login', icon: 'person', hidden: false },
    { title: 'register', url: '/register', icon: 'add', hidden: false },
  ];
  constructor() {
    getAuth().onAuthStateChanged((user) => {
      this.fireBaseUser = user;
    });
  }
  menuManagement(hidden: boolean): boolean {
    if (this.fireBaseUser == null && hidden) {
      console.log('cache');
      return false;
    } else {
      console.log('affiche');
      return true;
    }
  }
}
