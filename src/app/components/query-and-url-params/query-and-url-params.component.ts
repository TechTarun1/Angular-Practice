import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-and-url-params',
  templateUrl: './query-and-url-params.component.html',
  styleUrls: ['./query-and-url-params.component.css']
})
export class QueryAndUrlParamsComponent {

  constructor(private route: ActivatedRoute) { }

  urlParamsData: string = ''

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.urlParamsData = params.id;
    });
  }

}
