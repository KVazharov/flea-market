import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    return this.http.get('https://flea-market-745cd-default-rtdb.firebaseio.com/users.json');
  }

  register(username: string, email: string, password: string, confirmPassword: string, sectretQuestion: string, answer: string) {
    
    
    
    return this.http.post<User>('https://flea-market-745cd-default-rtdb.firebaseio.com/users.json', {
       username,
        email, 
        password, 
        confirmPassword, 
        sectretQuestion, 
        answer });
  }
}
