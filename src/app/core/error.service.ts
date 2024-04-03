import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private apiError$$ = new BehaviorSubject(null);
  public apiError$ = this.apiError$$.asObservable();

  errorMsg:any
  
  constructor() { }

  setError(error: any): void {
    this.errorMsg = this.apiError$$.next(error);
    this.apiError$$.next(error);
  }

}
