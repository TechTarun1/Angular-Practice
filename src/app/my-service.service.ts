import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private data: string;

  constructor() {
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

}
