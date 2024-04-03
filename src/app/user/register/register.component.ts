import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswords } from 'src/app/utils/match-passwords-validator';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewUser } from 'src/app/types/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{


  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    secretQuestion: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    checkTerms: [false, Validators.requiredTrue],
    passGroup: this.fb.group({
      password: ['', [Validators.required]], confirmPassword: ['', [Validators.required]],

    },
      {
        validators: [matchPasswords('password', 'confirmPassword')]
      })
  })

  ngOnInit(): void {
    if(this.authUser.isLoggIn()) {
    this.router.navigate(['/home']);
    }
  }

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private authUser: AuthUserService, private router: Router, private http: HttpClient) { }

  converted: any;
  isUsed = false

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)

    const {
      username,
      email,
      passGroup: { password, confirmPassword } = {},
      secretQuestion,
      answer,
    } = this.form.value;

    this.http.get('https://flea-market-745cd-default-rtdb.firebaseio.com/users.json').subscribe(users => {

      this.converted = Object.entries(users);
      for (const currentUserInfo of this.converted) {

        if (currentUserInfo[1].email === email) {
          console.log("Email is alrady used");
          this.isUsed = true;
          return
        }
      }

      if (username && email && password && confirmPassword && secretQuestion && answer) {

        const newUser: NewUser = {
          username,
          email,
          password,
          confirmPassword,
          secretQuestion,
          answer,
          wishList: [],
          addedProducts: []
        }

        this.authUser.register(newUser)?.subscribe(() => {
          this.router.navigate(['/login']);
          this.form.reset();
        });
      }
    });



  }


}
