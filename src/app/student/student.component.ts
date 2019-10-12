import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Student} from './model/student';
import {Utils} from '../commons/utils';
import {StudentData} from './data/studentData';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];
  @ViewChild('closeNewStudentModal', {static: false}) closeNewStudentModal: ElementRef;

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.students.push(new Student(f.value.name, new Date(joinDateString), f.value.isactive === true,
      utilsInstance.getSchoolName(f.value.school), Number(f.value.grade)));

    this.closeNewStudentModal.nativeElement.click();
  }

  ngOnInit(): void {
    const studentDataInstance = new StudentData();
    this.students = studentDataInstance.getAllStudents();
  }
}
