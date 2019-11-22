import { BaseService } from './Base.Service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {
  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
