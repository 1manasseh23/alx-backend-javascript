export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  return result.substring(0, result.length - 3);
}

/*
export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  // Iterate through the report using the next() method
  let next = reportWithIterator.next();
  while (!next.done) {
    const employeeName = next.value;
    employeeNames += employeeNames.length === 0 ? employeeName : ` | ${employeeName}`;
    next = reportWithIterator.next();
  }

  return employeeNames;
}
*/
