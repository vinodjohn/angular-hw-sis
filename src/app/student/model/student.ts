import {Utils} from '../../commons/utils';

export class Student {
  id: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  grade: number;

  constructor(name, joinDate, isActive, school, grade) {
    const utilsInstance = new Utils();
    this.id = 'S' + utilsInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }
}
