import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ErrorService } from '../error.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  isLoged:boolean = false;
  username: string = '';
  errorMesage: any;

  constructor(private errorSrveice: ErrorService, private errMsg: ErrorService) {}

  
  ngDoCheck() {
    const userId  = localStorage.getItem("user")
    if(userId) {
      this.isLoged = true;
    }
  }
  
  logout() {
    localStorage.removeItem("user");
  }

}
