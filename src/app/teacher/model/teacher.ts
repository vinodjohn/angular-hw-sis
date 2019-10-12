import {Utils} from '../../commons/utils';

export class Teacher {
  id: string;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(name, joinDate, isActive, school, specialistFields) {
    const utilsInstance = new Utils();
    this.id = 'T' + utilsInstance.getRandomId();
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}
