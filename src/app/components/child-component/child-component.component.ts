import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements AfterViewInit, OnDestroy {

  counter: number = 0
  interval: any
  channelName: string = ''

  constructor() {
    console.log('Child constructor')
  }

  @Input() message?: string
  @ContentChild('child') contentChildExample?: ElementRef

  ngOnInit() {
    console.log('child onInit');
    this.interval = setInterval(() => {
      this.counter = this.counter + 1
      console.log(this.counter)
    }, 1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log('on Destroy called when component removed from DOM')
  }
  ngAfterViewInit(): void {
    console.log('content', this.contentChildExample)
  }
}
