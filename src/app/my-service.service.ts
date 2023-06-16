import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private data: string;

  constructor(private http: HttpClient) {
    this.data = '';
  }

  // Getter
  public getData(): string {
    return this.data;
  }

  // Setter
  public setData(value: string): void {
    this.data = value;
  }

  //get Api call
  getCountries(): Observable<any> {
    const url = 'https://restcountries.eu/rest/v2/all'; // Replace with your API endpoint
    return this.http.get<any>(url);
  }
}
