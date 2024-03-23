import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [{path:'', pathMatch: 'full', redirectTo: '/home'},
{path: 'home', component: HomeComponent},
{path: '**', redirectTo: '/not-found'},
{path: 'not-found', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
