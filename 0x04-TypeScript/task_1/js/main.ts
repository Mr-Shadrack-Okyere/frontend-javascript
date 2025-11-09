// main.ts

// Teacher interface definition
interface Teacher {
  readonly firstName: string;          // firstName is readonly
  readonly lastName: string;           // lastName is readonly
  fullTimeEmployee: boolean;           // mandatory
  location: string;                    // mandatory
  yearsOfExperience?: number;          // optional
  [key: string]: any;                  // allow any other property
}

// Create a teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // additional property
};

// Output the teacher object
console.log(teacher3);
