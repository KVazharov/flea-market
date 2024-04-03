import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    SellComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class CoreModule { }
