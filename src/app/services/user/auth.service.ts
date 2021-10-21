import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor() {}
  public async logUserIn(mail, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        sessionStorage.setItem('user', this.user);
        sessionStorage.setItem('userRoles', this.user);
      })
      .catch((error) => {
        sessionStorage.clear();
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  public isAdmin() {}
}
