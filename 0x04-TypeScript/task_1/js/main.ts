// task_1/js/main.ts

// Task 1 - Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Task 2 - Directors interface (extends Teacher)
interface Directors extends Teacher {
  numberOfReports: number;
}

// example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3 - printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Task 3 - printTeacher function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe

// You can also test with other teachers
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Accra',
  fullTimeEmployee: false,
};

console.log(printTeacher(teacher1.firstName, teacher1.lastName)); // J. Smith
