import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProduct, Product } from '../types/user';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'https://flea-market-745cd-default-rtdb.firebaseio.com'
  constructor(private http: HttpClient) { }

  addProduct(category: string, productName: string, productDescription: string, phoneNumber: string, userId: string, imagesUrl: string[]) {
    return this.http.post<AddProduct>(`${this.url}/products.json`, { category, productName, productDescription, phoneNumber, userId, imagesUrl })
  }


  getProduct() {
    return this.http.get<AddProduct>(`${this.url}/products.json`);
  }

  getProductWithId (id: any) {
    return this.http.get(`${this.url}/products/${id}.json`)
    
  }

  getMyProducts(currentUserId:any) {
    return this.http.get<Product>(`${this.url}/products.json`)
  }

  deteleProduct(productId: any) {
    return this.http.delete(`${this.url}/products/${productId}.json`)
  }

  editProduct(productId:any, category:string, productName:string, productDescription: string,phoneNumber: string) {
    return this.http.patch(`${this.url}/products/${productId}.json`, {category, productName, productDescription, phoneNumber});
  }
  
}
