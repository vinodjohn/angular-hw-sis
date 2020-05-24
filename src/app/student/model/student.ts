export class Student {
  id: number;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  grade: number;

  constructor(id, name, joinDate, isActive, school, grade) {
    this.id = id;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }
}
