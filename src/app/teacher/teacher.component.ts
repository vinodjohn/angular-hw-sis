import {Component, Input, ViewChild, ElementRef} from '@angular/core';
import {Teacher} from './model/teacher';
import {Utils} from '../commons/utils';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  @Input() teachers: [Teacher];
  @ViewChild('closeNewTeacherModal', {static: false}) closeNewTeacherModal: ElementRef;

  onSubmit(f) {
    const utilsInstance = new Utils();
    const joinDateString = f.value.joindate.month.toString() + '-' + f.value.joindate.day.toString() + '-' +
      f.value.joindate.year.toString();

    this.teachers.push(new Teacher(f.value.name, new Date(joinDateString), f.value.isactive === true,
      utilsInstance.getSchoolName(f.value.school), this.getSpeciliazedFields(f.value.fields)));

    this.closeNewTeacherModal.nativeElement.click();
  }

  getSpeciliazedFields(fieldsArr) {
    const result = [];
    for (const field of fieldsArr) {
        switch (field) {
          case 'mathematics':
            result.push('Mathematics');
            break;
          case 'social':
            result.push('Social science');
            break;
          case 'lingustics':
            result.push('Lingustic studies');
            break;
          case 'zoology':
            result.push('Chemistry');
            break;
          case 'geography':
            result.push('Geography');
            break;
        }
    }
    return result;
  }
}
