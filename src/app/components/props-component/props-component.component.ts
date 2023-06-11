import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props-component',
  templateUrl: './props-component.component.html',
  styleUrls: ['./props-component.component.css']
})
export class PropsComponentComponent {
  @Input() users: any;
  name: string = ''
  names: string[] = ['Tarun', 'Devi', 'Dinesh', 'Mrudula']
  authLevel: string = ''
  age: number = 19
}