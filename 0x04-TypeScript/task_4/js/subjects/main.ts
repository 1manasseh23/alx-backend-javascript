// Constant for C++ Subjects
const CppSubjects: string = 'C++';

// Constant for Java Subjects
const JavaSubjects: string = 'Java';

// Constant for React Subjects
const ReactSubjects: string = 'React';

// Teacher object
interface Teacher {
  experienceTeachingC: number;
  getRequirements(): string;
  getAvailableTeacher(): string;
}

const cTeacher: Teacher = {
  experienceTeachingC: 10,
  getRequirements(): string {
    return 'Requirements for C++ course are:';
  },
  getAvailableTeacher(): string {
    return `Available teacher for the C++ course is: ${this.experienceTeachingC} years of experience`;
  },
};

console.log(CppSubjects);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());

console.log(JavaSubjects);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());

console.log(ReactSubjects);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());
