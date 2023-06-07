import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  count = 0
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
