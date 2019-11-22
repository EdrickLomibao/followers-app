import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router) { 

    }

  ngOnInit() {
    let id2 = this.route.snapshot.paramMap.get('id');
    console.log(id2);
    
    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');
    //     console.log(id);
    //   });

  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
