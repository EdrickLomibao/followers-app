import { EmailService } from './email.service';
import { CourseService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    isActive = true;
    email = "edricklomibao@gmail.com";

    onSave($event){
        console.log("Button was clicked.", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }

}

// @Component({
//     selector: 'courses',
//     template: `
//         <h2>{{ title }}</h2>
//         <ul>
//             <li *ngFor="let course of courses">
//                 {{ course }}
//             </li>
//         </ul>
//         `
// })
// export class CoursesComponent {
//     title = "List of courses";
//     courses;

//     constructor(service: CourseService) {
//         this.courses = service.getCourses();
//     }

// }