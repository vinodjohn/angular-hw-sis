import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Student} from './model/student';
import {Utils} from '../commons/utils';
import {StudentService} from './data/student.service';
import {SchoolService} from '../school/data/school.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students = [];
  schools = [];

  @ViewChild('closeNewStudentModal', {static: false}) closeNewStudentModal: ElementRef;

  constructor(private studentService: StudentService, private schoolService: SchoolService) {
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });

    this.schoolService.getAllSchools().subscribe((data: any[]) => {
      this.schools = data;
    });
  }

  onSubmit(f) {
    const joinDateString = f.value.joindate.year.toString() + '-' + f.value.joindate.month.toString() + '-' +
      f.value.joindate.date.toString();

    this.studentService.createStudent(new Student(f.value.id, f.value.name, new Date(joinDateString), true,
      f.value.school, Number(f.value.grade)));

    this.closeNewStudentModal.nativeElement.click();
    setTimeout('location.reload();', 2000);
  }
}
