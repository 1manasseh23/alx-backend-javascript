// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 30,
  location: 'San Francisco',
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  // Get the container element
  const container = document.createElement('div');

  // Create the table element
  const table = document.createElement('table');

  students.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  container.appendChild(table);
  document.body.appendChild(container);
}

renderTable(studentsList);
