import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FindProduct, Product } from 'src/app/types/user';
import { productCategory } from '../shared';




@Component({
  selector: 'app-current-product',
  templateUrl: './current-product.component.html',
  styleUrls: ['./current-product.component.css']
})
export class CurrentProductComponent implements OnInit {

  id: any;
  productsArr: Product[] = [];
  converted: any;
  findProduct: any;

  constructor(private activatedRoute: ActivatedRoute, private produtService: ProductService,) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.produtService.getProduct().subscribe(product => {
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

      this.findProduct = this.productsArr.find((x) => x.id === this.id);      
      
    });

  }

}
