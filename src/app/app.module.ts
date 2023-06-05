import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../app/components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { CarousalComponent } from './components/carousal/carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    NavbarComponent,
    TableComponent,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
