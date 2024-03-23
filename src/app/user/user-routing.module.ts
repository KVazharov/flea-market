import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddProductComponent } from "../products/add-product/add-product.component";


const routes: Routes = [{ path: 'login', component: LoginComponent },
{path:'register', component: RegisterComponent},
{path:'profile', component: ProfileComponent},
{path: 'add-product', component: AddProductComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
