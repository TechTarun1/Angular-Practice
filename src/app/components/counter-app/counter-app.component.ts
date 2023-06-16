import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    let className = ''
    if (this.count > 10) {
      className = 'profit'
      this.status = 'Profit'
    }
    else if (this.count < 0) {
      className = 'loss'
      this.status = 'Loss'
    }
    else {
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

  queryParamName?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.queryParamName = params.name;
    });
  }
}