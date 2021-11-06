import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Login } from 'src/app/models/auth/login';

//FireBase
import * as firebase from 'firebase/auth';
import { observable, Observable } from 'rxjs';
import { AuthService } from '../../services/user/auth.service';

//UI Componenent
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/auth/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login;
  fireUser: firebase.User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
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
        console.log(this.fireUser);
      })
      .catch(() => {
        this.failedToast();
      })
      .finally(() => {
        this.fireUser = firebase.getAuth().currentUser;
        if (this.fireUser) {
          this.router.navigateByUrl('/profile');
          this.successToast();
        } else {
          console.log(this.fireUser);

          this.successToast();
        }
      });
    let usr = new User();
    usr = this.authService.getUserInfos(this.user.email);
    console.log(usr);
  }
  disconnect() {
    getAuth()
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/login');
      });
  }
  async successToast() {
    const toast = await this.toastController.create({
      message: 'Conected !',
      duration: 2000,
      color: 'primary',
    });
    toast.present();
  }
  async failedToast() {
    const toast = await this.toastController.create({
      message: 'Incorrect email or password...',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
