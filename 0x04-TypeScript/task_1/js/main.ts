// ===========================
// Task 1 - Teacher interface
// ===========================
interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // always defined
  yearsOfExperience?: number;       // optional
  location: string;                 // always defined
  [key: string]: any;               // allows extra properties like contract
}

// Example Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                  // extra attribute
};

console.log(teacher3);
/* Expected output:
Object
contract: false
firstName: "John"
fullTimeEmployee: false
lastName: "Doe"
location: "London"
*/

// ===========================
// Task 2 - Directors interface (extends Teacher)
// ===========================
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
/* Expected output:
Object
firstName: "John"
fullTimeEmployee: true
lastName: "Doe"
location: "London"
numberOfReports: 17
*/

// ===========================
// Task 3 - printTeacher function
// ===========================
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher(teacher3.firstName, teacher3.lastName)); // J. Doe
console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe
