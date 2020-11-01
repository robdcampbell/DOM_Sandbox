
// Global UI Elements

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskBtn = document.getElementById('task-btn');

// Event listeners
taskBtn.addEventListener('click', addTask);


// UI Functions 
function addTask(e){
  const taskValue = taskInput.value
    
   // Validation
  if(taskValue === ''){
    // Create/Throw Alert Message
    const alertMessage = document.createElement('h3');
    alertMessage.id = 'alert-message';
    alertMessage.textContent = 'Please enter a task!'
    alertMessage.style.color = 'red';
    taskForm.before(alertMessage)
    // Clear Alert Message
    setTimeout(()=> {
      document.getElementById('alert-message').remove();
    },2000)
  } else {
    console.log(taskValue);
  }
    e.preventDefault();
} // Add Task



// SELECTOR NOTES:

/*

- INSERT: 
    JUST BEFORE AN ELEMENT:
  taskForm.before(alertMessage)

- INSERT: 
    JUST AFTER AN ELEMENT:
  taskForm.before(alertMessage)

*/
