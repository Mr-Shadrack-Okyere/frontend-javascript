// ===========================
// Task 0 - Student interface and table
// ===========================
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Example students
const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'London' };
const student2: Student = { firstName: 'Alice', lastName: 'Smith', age: 22, location: 'Paris' };

const studentsList: Student[] = [student1, student2];

// Render table in browser
const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cellName = row.insertCell();
  const cellLocation = row.insertCell();
  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
});
document.body.appendChild(table);

// ===========================
// Task 1 - Teacher interface
// ===========================
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties like contract
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// ===========================
// Task 2 - Directors interface (extends Teacher)
// ===========================
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

// ===========================
// Task 3 - printTeacher function
// ===========================
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher(teacher3.firstName, teacher3.lastName)); // J. Doe
console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe

// ===========================
// Task 4 - StudentClass
// ===========================
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
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

// Example usage
const student = new StudentClass('Alice', 'Johnson');
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
