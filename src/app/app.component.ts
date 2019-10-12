import { Component } from '@angular/core';
import {TEACHERS} from './teacher/data/teacherData';
import {STUDENTS} from './student/data/studentData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 teachers = TEACHERS;
 students = STUDENTS;
}
