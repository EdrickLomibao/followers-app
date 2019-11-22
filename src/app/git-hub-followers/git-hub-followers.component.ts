import { Observable } from 'rxjs/Observable';
import { GithubfollowersService } from './../services/githubfollowers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubfollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page'); 

      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }

}
