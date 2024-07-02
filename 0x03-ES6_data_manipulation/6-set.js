function setFromArray(Array) {
  const output = new Set();
  
  for (const element of Array) {
    output.add(element);
  }
  return output;
}

export default setFromArray;
