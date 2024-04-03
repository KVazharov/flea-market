import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/types/user';
import { Route, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent implements OnInit {
  form = this.fb.group({
    category: ['', [Validators.required]],
    productName: ['', [Validators.required]],
    productDescription: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]]
  });

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  myProducts: Product[] = [];
  converted: any;
  showEditMode: boolean = false;
  canRender: boolean = false;
  productId: any;
  data: any;

  ngOnInit() {
    const currentUserId = localStorage.getItem('user');

    return this.productService.getMyProducts(currentUserId).subscribe((products) => {

      this.converted = Object.entries(products);

      for (const currentProductInfo of this.converted) {
        let productId = currentProductInfo[0];
        let productInfo = currentProductInfo[1];
        let userId = currentProductInfo[1].userId;
        productInfo.id = productId;

        if (userId == currentUserId) {
          this.myProducts.push(productInfo);
        }
      }
    });
  }

  deleteProduct(event: Event) {

    const element = event.target as HTMLElement;
    this.productId = element.parentElement?.parentElement?.getAttribute('id');

    return this.productService.deteleProduct(this.productId).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  editProduct(event: Event) {

    this.showEditMode = true;
    const element = event.target as HTMLElement;
    this.productId = element.parentElement?.parentElement?.getAttribute('id');

    this.productService.getProductWithId(this.productId).subscribe(data => {
      this.canRender = true;
      this.data = data;
      this.form.patchValue({
        category: this.data.category,
        productName: this.data.productName,
        productDescription: this.data.productDescription,
        phoneNumber: this.data.phoneNumber,

      });

    });

  }

  onEdit() {

    if (this.form.invalid) {
      return
    }

    const { category, productName, productDescription, phoneNumber } = this.form.value;
    
    if (category && productName && productDescription && phoneNumber) {
      this.productService.editProduct(this.productId, category, productName, productDescription, phoneNumber).subscribe(() => {
        this.router.navigate(['/home'])
      });
    }

  }

}
