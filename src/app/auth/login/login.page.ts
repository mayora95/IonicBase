import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Login } from 'src/app/models/auth/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login;
  constructor() {
    this.user = new Login();
  }
  ngOnInit() {}
  onClick() {}
  login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  disconnect() {
    getAuth().signOut();
  }
}
