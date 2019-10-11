import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import {Student} from './model/student';
import {Utils} from '../commons/utils';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() students: [Student];
  @ViewChild('closeNewStudentModal', {static: false}) closeNewStudentModal: ElementRef;

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.students.push(new Student(f.value.name, new Date(joinDateString), f.value.isactive === true,
      utilsInstance.getSchoolName(f.value.school), Number(f.value.grade)));

    this.closeNewStudentModal.nativeElement.click();
  }
}
