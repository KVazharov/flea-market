import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';





@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  form = this.fb.group({
    category: ['', [Validators.required]],
    productName: ['', [Validators.required]],
    productDescription: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    images: ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private fireStorage: AngularFireStorage) { }

  imageNames: string[] = [];

  imagesUrl: string[] = [];

  async onFileSelected(event: any) {
    const files = event.target.files

    for (let i = 0; i < files.length; i++) {
      const fileName = files[i].name

      this.imageNames.push(fileName)
      const uploadData = files[i]
      if (this.imageNames.length > 0) {

        const path = `/${fileName}`;
        const uploadFiles = await this.fireStorage.upload(path, uploadData);
        const dowload = await uploadFiles.ref.getDownloadURL()
        this.imagesUrl.push(dowload);

      }
    }
  }

  addProduct() {

    const userId = localStorage.getItem('user');

    const { category, productName, productDescription, phoneNumber } = this.form.value;
    if (this.form.invalid) {
      return;
    }

    if (category && productName && productDescription && phoneNumber && userId) {

      this.productService.addProduct(category, productName, productDescription, phoneNumber, userId, this.imagesUrl).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/home']);
      })

    }


  }
}
