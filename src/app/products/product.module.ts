import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { CurrentProductComponent } from './current-product/current-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyProductsComponent } from './my-products/my-products.component';


@NgModule({
  declarations: [
    ProductListComponent,
    CurrentProductComponent,
    MyProductsComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    AppRoutingModule
  ]
})
export class ProductModule { }
