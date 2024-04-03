import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddProductComponent } from "../products/add-product/add-product.component";
import { AuthGuardService } from "../guard/auth-guard.service";


const routes: Routes = [{ path: 'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
{path: 'add-product', component: AddProductComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
