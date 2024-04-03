import { Component, ElementRef, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/types/user';
import { productCategory } from '../shared';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  productsArr: Product[] = [];

  converted: any;
  constructor( private productService: ProductService, private elementRef: ElementRef<HTMLElement>) { }

  ngOnInit() {
    
    return this.productService.getProduct().subscribe(product => {
      this.converted = Object.entries(product)

      for (const currentProductInfo of this.converted) {

        let productId = currentProductInfo[0];
        let productInfo = currentProductInfo[1];
        let category = currentProductInfo[1].category;
        productInfo.id = productId;

        if (category === productCategory.category) {
          this.productsArr.push(productInfo);
        }
      }
    });
  }
  
  getProductId(event: Event) {

    const element = event.target as HTMLElement;
     const id = element.getAttribute('id');    
    
  }
}
