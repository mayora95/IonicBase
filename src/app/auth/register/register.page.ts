import { Component, OnInit } from '@angular/core';

//FireBase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Login } from 'src/app/models/auth/login';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: Login;
  todo = {};
  constructor(firestore: AngularFirestore) {
    this.user = new Login();
  }
  ngOnInit() {}

  registerUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  onClick() {
    console.log(this.user);
  }

  logForm() {
    console.log(this.todo);
  }
}
