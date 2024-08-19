// defind class Teacher
class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperiance?: number;
  location: string;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    additionalAttributes?: { [key: string]: any }
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    if (additionalAttributes) {
      Object.assign(this, additionalAttributes);
    }
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'Jos',
  contract: false,
};

console.log(teacher3);

// 2. Extending the Teacher class 
interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 3. Printing teachers 
function printTeacher(firstName: string, lastName: string): string {
 return `${firstName[0]}, ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const output = printTeacher('John', 'Doe');
console.log(output);

// 4. Writing a class
interface StudentInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const output1 = new StudentClass('John', 'Doe');
console.log(output1.displayName());
console.log(output1.workOnHomework());

