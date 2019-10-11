import { Component } from '@angular/core';
import {TEACHERS} from './student/data/studentData';
import {STUDENTS} from './teacher/data/teacherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 teachers = TEACHERS;
 students = STUDENTS;
}
