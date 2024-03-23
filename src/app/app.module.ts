import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';7
import {HttpClientModule} from '@angular/common/http';
import { ProductModule } from './products/product/product.module';
import { AddProductComponent } from './products/add-product/add-product.component';
// import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"flea-market-745cd","appId":"1:571135236838:web:246014b73556b1664a3927","databaseURL":"https://flea-market-745cd-default-rtdb.firebaseio.com","storageBucket":"flea-market-745cd.appspot.com","apiKey":"AIzaSyAmV1iDQs-0JH-LuIOLIYMUpwkhmPPkAgs","authDomain":"flea-market-745cd.firebaseapp.com","messagingSenderId":"571135236838"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],  
  // appInterceptorProvider
  bootstrap: [AppComponent]
})
export class AppModule { }
