import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswords } from 'src/app/utils/match-passwords-validator';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';
import { AddedProducts } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // addedProducts: AddedProducts[] =[]

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    sectretQuestion: ['', [Validators.required]],
    answer: ['', [Validators.required]],
    checkTerms: [false, Validators.requiredTrue],
    passGroup: this.fb.group({
      password: ['', [Validators.required]], confirmPassword: ['', [Validators.required]],

    },
      {
        validators: [matchPasswords('password', 'confirmPassword')]
      })
  })

 

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private authUser: AuthUserService, private router: Router) { }

  register(): void {

    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)

    const {
      username,
      email,
      passGroup: { password, confirmPassword } = {},
      sectretQuestion,
      answer,
    } = this.form.value;
    
    this.authUser.register( username!, email!, password!, confirmPassword!,sectretQuestion!, answer!)?.subscribe(()=> {
      this.router.navigate(['/login'])
    })
  
  }


}
