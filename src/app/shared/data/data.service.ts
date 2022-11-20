import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';
import { throwError } from 'rxjs';


@Injectable()
export class DataService {
  private BASE_URL = 'http://localhost:8080';
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  headers = new Headers();
  token = sessionStorage.getItem('token');


  getAll() {
    /*         this.headers.append('Authorization', 'Bearer' + this.token);
    
            let basicHeader = 'Bearer' + this.token;
        
            let options = new RequestOptions({ headers: this.headers }) */
    return this.http.get(this.BASE_URL + this.url)
    // .map(response => response.json())
    // .catch(this.handleError);
  }

  get(id: any) {
    return this.http.get(this.BASE_URL + this.url + '/' + id)
    //.map(response => response.json())
    // .catch(this.handleError);    
  }

  create(resource: any) {
    return this.http.post(this.BASE_URL + this.url, resource)
    // .map(response => response.json())
    // .catch(this.handleError);
  }

  update(resource: any) {
    return this.http.patch(this.BASE_URL + this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    // .map(response => response.json())      
    // .catch(this.handleError);
  }

  delete(id: any) {
    return this.http.delete(this.BASE_URL + this.url + '/' + id)
      // .map(response => response.json())
      .toPromise()
      .catch();
  }

  // private handleError(error: Response) {
  //   if (error.status === 400)
  //     return Observable.throwError(() => new Error(new BadInput(error.json())));

  //   if (error.status === 404)
  //     return Observable.throwError(new NotFoundError());

  //   return Observable.throwError(new AppError(error));
  // }
}
