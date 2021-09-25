import { Component, OnInit } from '@angular/core';
import { Router, ɵangular_packages_router_router_b } from '@angular/router';
import { getAuth, User } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  fireUser: User;
  constructor(private router: Router) {
    getAuth().onAuthStateChanged((user) => {
      this.fireUser = user;
    });
  }

  ngOnInit() {}
  disconnect() {
    getAuth()
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/login');
      });
  }
}
