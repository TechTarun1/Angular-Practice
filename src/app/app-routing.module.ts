import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './example-module/main/main.component';
import { CounterAppComponent } from './components/counter-app/counter-app.component';
import { QueryAndUrlParamsComponent } from './components/query-and-url-params/query-and-url-params.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { PipesExComponent } from './components/pipes-ex/pipes-ex.component';
import { Child1Component } from './components/child1/child1.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'count', component: CounterAppComponent },
  {
    path: 'parent',
    component: ParentComponentComponent,
    children: [
      {
        path: 'child1',
        component: Child1Component
      }
    ]
  },
  { path: 'child', component: ChildComponentComponent },
  { path: 'urlParams/:id', component: QueryAndUrlParamsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: 'pipe', component: PipesExComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
