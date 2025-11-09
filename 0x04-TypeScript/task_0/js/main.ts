// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
  location: "London"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse"; // optional styling

// Optional: add table headers
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Render each student as a new row in the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Optional: add simple styling
  firstNameCell.style.border = "1px solid black";
  locationCell.style.border = "1px solid black";
  firstNameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
