export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) { // Use "const" and for...of
    const index = array.indexOf(value); // Find index
    array[index] = appendString + value;
  }

  return array;
}

