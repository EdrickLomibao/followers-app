import { CourseComponent } from './../course/course.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-directives',
  templateUrl: './six-directives.component.html',
  styleUrls: ['./six-directives.component.css']
})
export class SixDirectivesComponent implements OnInit {

  title = 'TraningSixDirectives';
  courses = [];
  viewMode = 'map'

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.courses.push({ id:4, name: 'course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)

  }

  onChange(course){
    course.name = 'UPDATED';
  }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;

  }

}
