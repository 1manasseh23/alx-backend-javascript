/**
 * Function to return a specific task string.
 * 
 * This function declares a constant variable `task` with a string value
 * and returns that string. The use of `const` indicates that the value
 * of `task` will not be reassigned within this function.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
/**
 * Function to return a specific ending string.
 * 
 * This function returns a fixed string indicating an acceptance
 * of using `let` in JavaScript.
 *
 * @returns {string} - The string ' is okay'
 */
export function getLast() {
  return ' is okay';
}
/**
 * Function to return a combination of strings.
 * 
 * This function declares a variable `combination` using `let`,
 * initially assigning it the string 'But sometimes let'. It then
 * appends the string returned by `getLast()` to `combination` and
 * returns the combined string.
 *
 * @returns {string} - The concatenated string 'But sometimes let is okay'
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

