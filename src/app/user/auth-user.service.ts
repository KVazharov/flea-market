import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser, User } from '../types/user';



@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private http: HttpClient) { }

  url = 'https://flea-market-745cd-default-rtdb.firebaseio.com';
  
  login(email: string, password: string) {

    return this.http.get(`${this.url}/users.json`);
  }


  register({ username, email, password, confirmPassword, secretQuestion, answer, addedProducts, wishList }: NewUser) {


    return this.http.post<User>(`${this.url}/users.json`, {
      username,
      email,
      password,
      confirmPassword,
      secretQuestion,
      answer,
      addedProducts,
      wishList
    });
  }

  getUserById(userId: string) {

    return this.http.get<User>(`${this.url}/users/${userId}.json`);
  }

  isLoggIn() {
    return localStorage.getItem('user');
  }



}
