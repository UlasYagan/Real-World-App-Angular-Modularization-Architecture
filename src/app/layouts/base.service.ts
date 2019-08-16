import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor( protected httpClient: HttpClient) { }

  getById(url:string,id) {
    return this.httpClient.get(environment.BASE_URL + url + "/" + id);
  }

  public getAll() {
    return this.httpClient
      .get(environment.BASE_URL)
      .pipe(
        // catchError((err, source) => )
      );
  }

  public create(url:string, formdata) {
    return this.httpClient
      .post(environment.BASE_URL + url, JSON.stringify(formdata))
      .pipe(
        // catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public update(url:string, formdata) {
    return this.httpClient
      .patch(environment.BASE_URL + url, JSON.stringify(formdata))
      .pipe(
        // catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }

  public delete(url:string, id: any) {
    return this.httpClient
      .delete(`${environment.BASE_URL + url}/${id}`)
      .pipe(
        // catchError((err, source) => this.responseHandler.onCatch(err, source))
      );
  }
  
}
