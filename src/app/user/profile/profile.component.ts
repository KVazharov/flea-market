import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth-user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private authUser: AuthUserService) {
  }

  email: string = '';
  username: string = '';

  ngOnInit(): void {
    const userId = localStorage.getItem('user');

    this.authUser.getUserById(userId!).subscribe(userInfo => {
      this.email = userInfo.email;
      this.username = userInfo.username;

    });
  }

}

