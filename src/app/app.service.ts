import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  serverUrl = 'https://testologia.site/';

  sendOrder(data: any) {
    return this.http.post(`${this.serverUrl}burgers-order`, data);
  }

  getData() {
    return this.http.get(`${this.serverUrl}burgers-data?extra=black`);
  }
}
