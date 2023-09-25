export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task2 = true;
    const task = false;
  }

  return [task, task2];
}
