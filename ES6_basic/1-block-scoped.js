export default function taskBlock(trueOrFalse) {
    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }
    
    task = false;
    task2 = true;
    
    return [task, task2];
  }

  console.log(taskBlock(true));
  console.log(taskBlock(false));