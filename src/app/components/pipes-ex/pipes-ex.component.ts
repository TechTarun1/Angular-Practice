import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrls: ['./pipes-ex.component.css']
})
export class PipesExComponent {
  currentDate: Date = new Date();
  text: string = 'Tarun'
  price: number = 280
  number: number = 82
  percentage: number = 30
  object: any = {
    name: 'hi',
    value: 20
  }
  name:string='B Sai Tarun'
  array: string[] = ['Tarun', 'Mrudula', 'Devi', 'Mythili', 'Dinesh']
  observableValue: Observable<string> = of('Hello, world!');
}
