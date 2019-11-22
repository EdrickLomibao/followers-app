import { AppError } from './../common/app-error';
import { BadInput } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
      map(response => response.json()),
      catchError(this.handleError));
  }

  create(resource){
    //return throwError(new AppError());
    return this.http.post(this.url, resource, JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  delete(id){
    //return throwError(new AppError());
    return this.http.delete(this.url + '/' + id)
    .pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if(error.status === 400)
      return throwError(new BadInput(error))
    
    if(error.status === 404)
      return throwError(new NotFoundError(error));

    return throwError(new AppError(error));
  }
  

}
