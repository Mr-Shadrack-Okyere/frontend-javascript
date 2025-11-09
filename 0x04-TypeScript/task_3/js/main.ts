/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert row and get a new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row by adding age
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Update and delete using CRUD functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
