import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements AfterViewInit{
  @Input() message?: string
  @ContentChild('child') contentChildExample?:ElementRef

  ngAfterViewInit(): void {
    console.log('content',this.contentChildExample)
  }
}
