// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title,);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
  
// }
// Refactored for OOP

function newTask(title, description){
  const tasks = {
    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${tasks.title} has${tasks.complete ? " " : " not "} been completed `);
    },
    markCompleted: function(){
      this.complete = true;
    }

  };
  return tasks;
} 



function logTaskState(){ 
  console.log(`${tasks.title} has${tasks.complete ? " " : " not "} been completed `);
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
