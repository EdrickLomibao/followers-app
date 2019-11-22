import { TestBed } from '@angular/core/testing';

import { GithubfollowersService } from './githubfollowers.service';

describe('GithubfollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubfollowersService = TestBed.get(GithubfollowersService);
    expect(service).toBeTruthy();
  });
});
