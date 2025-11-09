// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // only modifiable when initialized
  readonly lastName: string;         // only modifiable when initialized
  fullTimeEmployee: boolean;         // always defined
  yearsOfExperience?: number;        // optional
  location: string;                  // always defined
  [key: string]: any;                // allow additional properties like contract
}

// Create a teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

// Log the object
console.log(teacher3);

/* Expected Output:
Object
  contract: false
  firstName: "John"
  fullTimeEmployee: false
  lastName: "Doe"
  location: "London"
*/
