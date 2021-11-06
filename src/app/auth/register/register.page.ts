import { Component, OnInit } from '@angular/core';

//FireBase
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Login } from 'src/app/models/auth/login';
import { AuthService } from 'src/app/services/user/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: Login;
  todo = {};
  constructor(firestore: AngularFirestore, private authService: AuthService) {
    this.user = new Login();
  }
  ngOnInit() {}

  registerUser() {
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     this.authService.createUserInfos(this.user.email);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    this.authService.createUserInfos(this.user.email);
  }
  onClick() {}

  logForm() {}
}
