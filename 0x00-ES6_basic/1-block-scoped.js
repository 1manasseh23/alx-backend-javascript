export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  if (trueOrFalse) {
    task = false;
    task2 = true;
  }
  // if (trueOrFalse) {
  // }
  return [task, task2];
}
