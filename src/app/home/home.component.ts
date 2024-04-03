import { Component } from '@angular/core';
import { productCategory } from '../products/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  tabletFn() {
    productCategory.category = "tablet"
  }

  laptopFn() {
    productCategory.category = "laptop"
  }

  phoneFn() {
    productCategory.category = "phone"
  }

  monitorFn() {
    productCategory.category = "monitor"
  }
  
  headphonesFn() {
    productCategory.category = "headphones"
  }
}
