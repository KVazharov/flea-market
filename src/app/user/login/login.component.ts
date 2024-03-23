import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password: ['', Validators.required]
  })

  converted: any
  constructor(private fb: FormBuilder, private authUser: AuthUserService, private router: Router) { }

  login() {

    if (this.form.invalid) {
      return
    }

    const { email, password } = this.form.value;
    this.authUser.login(email!, password!).subscribe(users => {
      
      this.converted = Object.entries(users)
      for (const currentUserInfo of this.converted) {

        let UserId = currentUserInfo[0]
        if (currentUserInfo[1].email === email && currentUserInfo[1].password === password) {
          localStorage.setItem("user", UserId)
          this.router.navigate(['/'])
          return
        }
      }
    });

    this.form.reset()
    
  }
}
