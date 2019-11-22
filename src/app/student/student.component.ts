import { StudentService } from '../student/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students;

  constructor(service: StudentService) { 

    this.students = service.getStudents();

  }

  ngOnInit() {
  }

}
