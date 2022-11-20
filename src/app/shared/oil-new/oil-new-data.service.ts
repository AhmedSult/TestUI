import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OilNewDataService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8080/new';

  constructor(private http: HttpClient) { }

  save(resource: any) {
    console.log('Request is sent!');
    this.http.post(this.URL, resource).subscribe();
  }

  resolveItems(): Observable<any> {
    console.log('Request is sent!');

    return this.http.get(this.URL);
  }
}