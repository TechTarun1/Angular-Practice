import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as React from 'react';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  users = {
    name: 'Tarun',
    salary: 100000000
  }

  hi: string = 'hi'

  dataReceivedFRomChild(shareToParent: string) {
    alert('data received from child' + shareToParent)
  }
  gotoCountQueryParams = () => {
    const queryParams = { name: 'Tarun' };
    this.router.navigate(['/count'], { queryParams: queryParams })
  }
  gotoqueryAndUrlParamsComponent = () => {
    const urlParams = { id: 'Tarun' };
    this.router.navigate(['/urlParams',urlParams.id])
  }

 hii=()=>{
alert('wfgydfty')
 }
}
