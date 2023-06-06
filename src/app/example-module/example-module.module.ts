import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainComponent
  ]
})
export class ExampleModuleModule { }
