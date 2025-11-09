### Task 0: Creating an Interface for a Student

**Objective:**  
Learn how to create a TypeScript interface, use arrays of objects, and render content dynamically in the DOM.

---

**Instructions:**

1. Inside the `0x04-TypeScript/task_0` directory, copy the following configuration files:  
   - `package.json`  
   - `.eslintrc.js`  
   - `tsconfig.json`  
   - `webpack.config.js`

2. Write your TypeScript code in `main.ts`:

   - Create an interface named `Student` with the following properties:
     ```ts
     interface Student {
       firstName: string;
       lastName: string;
       age: number;
       location: string;
     }
     ```
   - Create two `Student` objects.
   - Store them in an array named `studentsList`.
   - Using vanilla JavaScript, render a table in the DOM where each row displays the `firstName` and `location` of a student.

3. Compile the TypeScript code with Webpack. Ensure no type errors occur.

---

**Expected Output:**

- A table displayed on a web page showing the first name and location of each student.

---

**Repo Path:**  
`frontend-javascript/0x04-TypeScript/task_0/js/main.ts`

---

**Example Code (main.ts):**
```ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "John", lastName: "Doe", age: 22, location: "New York" };
const student2: Student = { firstName: "Jane", lastName: "Smith", age: 23, location: "London" };

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
