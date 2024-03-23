import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  isLoged:boolean = false;
  
  ngDoCheck() {
    if(localStorage.getItem("user")) {
      this.isLoged = true;
    }
    
  }

  logout() {
    localStorage.removeItem("user")
  }
}
