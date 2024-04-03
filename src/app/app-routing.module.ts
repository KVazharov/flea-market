import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CurrentProductComponent } from './products/current-product/current-product.component';
import { MyProductsComponent } from './products/my-products/my-products.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { SellComponent } from './core/sell/sell.component';
import { AuthGuardService } from './guard/auth-guard.service';



const routes: Routes = [{path:'', pathMatch: 'full', redirectTo: '/home'},
{path: 'home', component: HomeComponent},
{path:'product-list',component: ProductListComponent},
{path:'product-list/:id',component: CurrentProductComponent},
{path: 'my-products', component: MyProductsComponent, canActivate: [AuthGuardService]},
{path: 'about-us', component: AboutUsComponent},
{path: 'sell', component: SellComponent},
{path: '**', redirectTo: '/not-found'},
{path: 'not-found', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
