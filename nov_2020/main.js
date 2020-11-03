
// Global UI Elements

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskBtn = document.getElementById('task-btn');
const taskList = document.getElementById('output');

// Event listeners
taskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

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
    const taskItem  = document.createElement('div');
    // taskItem.className = 'container';
    taskItem.innerHTML = `
    <h3 class="item-heading">${taskValue}</h3>
    <a href="#" class="item-remove">delete task.</a>
    <hr>
    `
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
  }
    e.preventDefault();
} // Add Task

// Remove Task 
function removeTask(e){
  console.log(e.target);
  if(e.target.className === 'item-remove'){
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
  e.preventDefault();
}



// SELECTOR NOTES:

/*

- INSERT: 
    JUST BEFORE AN ELEMENT:
  taskForm.before(alertMessage)

- INSERT: 
    JUST AFTER AN ELEMENT:
  taskForm.before(alertMessage)

*/
