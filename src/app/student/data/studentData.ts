export const STUDENTS = [
  { id: 'T89038',
    name: 'Tony stark',
    joinDate: new Date('03-23-2014'),
    isActive: true,
    school: 'International school of Tallinn',
    grade: 9
  }
];

export class StudentData {
  public getAllStudents() {
    return STUDENTS;
  }
}
