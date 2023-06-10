import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  count: number = 0
  isActive: boolean = true
  status: string = ''

  counter = (type: string) => {
    type === 'add' ? (this.count++) : this.count--;
  }

  profitOrLoss = () => {
    console.log(this.count)
    let className = ''
    if (this.count > 10) {
      // this.isActive = true
      className = 'profit'
      this.status = 'Profit'
    }
    else if (this.count < 0) {
      // this.isActive = false
      className = 'loss'
      this.status = 'Loss'
    }
    else{
      className = 'stable'
      this.status = 'Stable'
    }
    return className
  }

  name = () => {
    let className = ''
    if (this.count > 10) {
      className = 'highlight'
    }
    else if (this.count <= 10) {
      className = 'fade-color'
    }
    return className
  }
}
