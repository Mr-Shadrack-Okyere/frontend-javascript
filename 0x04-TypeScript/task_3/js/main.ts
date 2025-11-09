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
