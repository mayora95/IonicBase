import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionsName } from 'src/app/common/global/collections';
import { User } from 'src/app/models/auth/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(private afs: AngularFirestore) {}
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
  public createUserInfos(email: string) {
    //Create user in FireBase Authentification
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    //Create user info
    const userTmp = new User();
    userTmp.email = email;
    userTmp.isActive = true;
    userTmp.isAdmin = false;
    userTmp.isArtist = false;
    this.afs
      .collection<User>(CollectionsName.users)
      .doc(email)
      .set(Object.assign({}, userTmp));
  }
  public getUserInfos(email: string) {
    //Get user info
    let usr = new User();
    this.afs
      .collection<User>(CollectionsName.artists)
      .doc(email)
      .valueChanges()
      .subscribe((doc) => (usr = doc));
    return usr;
  }
}
