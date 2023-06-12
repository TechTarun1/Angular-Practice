import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyServiceService } from '../../my-service.service'


@Component({
  selector: 'app-props-component',
  templateUrl: './props-component.component.html',
  styleUrls: ['./props-component.component.css']
})
export class PropsComponentComponent {
  
  @Input() users: any;

  @Input() hello?: string;

  name: string = ''

  isActive: boolean = false

  names: string[] = ['Tarun', 'Devi', 'Dinesh', 'Mrudula']

  authLevel: string = ''

  age: number = 19

//sending data using @output emitter
  @Output() dataFromChild: EventEmitter<string> = new EventEmitter<string>()

  shareToParent() {
    this.dataFromChild.emit('"Data from child"')
  }

  //services getter and setter implementation
  constructor(public myService: MyServiceService) { 
    
  }

  updateData() {
    this.myService.setData('New Value');
  }
}
