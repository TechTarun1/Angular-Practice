import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { ExampleModuleModule } from './example-module/example-module.module';
import { CounterAppComponent } from './components/counter-app/counter-app.component';
import { PropsComponentComponent } from './components/props-component/props-component.component';
import { QueryAndUrlParamsComponent } from './components/query-and-url-params/query-and-url-params.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { Child1Component } from './components/child1/child1.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { InitialsPipe } from './initials.pipe';
import { PipesExComponent } from './components/pipes-ex/pipes-ex.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    NavbarComponent,
    TableComponent,
    CarousalComponent,
    CounterAppComponent,
    PropsComponentComponent,
    QueryAndUrlParamsComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    Child1Component,
    FormsComponent,
    ReactiveFormsComponent,
    InitialsPipe,
    PipesExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    MatStepperModule,
    ExampleModuleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }