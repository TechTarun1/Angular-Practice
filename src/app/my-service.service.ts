import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  //get Api call
  getCountries = () => {
    const url = "https://catfact.ninja/fact"; // Replace with your API endpoint
    return this.http.get<any>(url, { headers: this.headers });
  }
}
