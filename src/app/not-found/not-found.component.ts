import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notfound',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("Not found Component kicks in!");
  }

}
