import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { Child1Component } from '../child1/child1.component';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  message: string = ''
  messages: any

  @ViewChild(ChildComponentComponent) messageViewChild!: ChildComponentComponent;
  @ViewChild(Child1Component) messageViewChildren!: Child1Component;

  //Want to have focus on input 
  @ViewChild('myInput', { static: true }) myCustomInput: any;

  constructor(private cd: ChangeDetectorRef, private api: MyServiceService) {
    console.log('Parent constructor')
  }

  //it will chage the the initial message of child but gets an issue
  ngAfterViewInit(): void {

    //trigger error as we change previous value
    this.messageViewChild.message = 'Passed as view child(updated using view child)'

    //by adding this change detection we can remove that error
    this.cd.detectChanges()
  }

  ngOnInit() {
    console.log('Parent onInit')
    this.message = 'message from parent'
    this.messages = this.getMessages()
    this.api.getCountries().subscribe((data: any) => {
      console.log('data', data.fact)
    })

    //to have focus on input
    this.myCustomInput.nativeElement.focus()
  }
  getMessages = () => {
    return [
      'Hello Tarun',
      'Hello Devi',
      'Hello Mrudula',
      'Hello Dinesh'
    ]
  }

  //template variable access
  sendInput = (input: any, para: any) => {
    console.log('inputvalue', input.value)
    console.log('paragraphTag', para.innerHTML)
  }

  //toggle child
  isChildVisible: boolean = false
  toggleChild = () => {
    this.isChildVisible = !this.isChildVisible
  }
}