import { BaseService } from './Base.Service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubfollowersService extends BaseService {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
   }

}
