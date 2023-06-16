import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './example-module/main/main.component';
import { CounterAppComponent } from './components/counter-app/counter-app.component';
import { QueryAndUrlParamsComponent } from './components/query-and-url-params/query-and-url-params.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'count', component: CounterAppComponent },
  { path: 'parent', component: ParentComponentComponent },
  { path: 'child', component: ChildComponentComponent },
  { path: 'urlParams/:id', component: QueryAndUrlParamsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
