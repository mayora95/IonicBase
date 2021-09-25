import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Login } from 'src/app/models/auth/login';

//FireBase
import * as firebase from 'firebase/auth';
import { observable, Observable } from 'rxjs';

import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login;
  fireUser: firebase.User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new Login();

    firebase.getAuth().onAuthStateChanged((user) => {
      this.fireUser = user;
    });
  }
  ngOnInit() {}
  onClick() {}
  async login() {
    await this.authService
      .logUserIn(this.user.email, this.user.password)
      .then(() => {
        this.fireUser = firebase.getAuth().currentUser;
        this.router.navigateByUrl('/profile');
      });
  }
  disconnect() {
    getAuth()
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/login');
      });
  }
  showState() {
    this.fireUser = firebase.getAuth().currentUser;
  }
}
