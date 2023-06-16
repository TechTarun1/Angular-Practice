import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private cd: ChangeDetectorRef, private api: MyServiceService) { }

  //it will chage the the initial message of child but gets an issue
  ngAfterViewInit(): void {

    //trigger error as we change previous value
    this.messageViewChild.message = 'Passed as view child(updated using view child)'

    //by adding this change detection we can remove that error
    this.cd.detectChanges()
  }

  ngOnInit(): void {
    this.message = 'message from parent'
    this.messages = this.getMessages()
  }
  getMessages = () => {
    return [
      'Hello Tarun',
      'Hello Devi',
      'Hello Mrudula',
      'Hello Dinesh'
    ]
  }
}