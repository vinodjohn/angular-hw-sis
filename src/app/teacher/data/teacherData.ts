import { ajax } from 'rxjs/ajax';

export const TEACHERS = [
  { id: 'T78946',
    name: 'Michael Jonas',
    joinDate: new Date('12-10-2013'),
    isActive: true,
    school: 'International school of Tartu',
    specialistFields: ['Mathematics', 'Chemistry']
  },
  { id: 'T56901',
    name: 'Kristi Janes',
    joinDate: new Date('1-26-2016'),
    isActive: false,
    school: 'International school of Parnu',
    specialistFields: ['Physics', 'Zoology']
  }
];

export class TeacherData {
  public getAllTeachers() {
/*    const result = [];
    const getTeacher = ajax('http://5d7e077fd756030014184069.mockapi.io/teacher');
    getTeacher.subscribe(res => result.push(res.response));*/
    return TEACHERS;
  }
}
