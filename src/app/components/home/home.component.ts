import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users = {
    name: 'Tarun',
    salary: 100000000
  }

  hi:string='hi'

  dataReceivedFRomChild(shareToParent:string){
    alert('data received from child'+shareToParent)
  }

}
