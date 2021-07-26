document.addEventListener("DOMContentLoaded", () => {
  const formBox = document.querySelector('#create-task-form' )
  const taskList = document.querySelector('#task')

  formBox.addEventListener('submit', function(event) {
    event.preventDefault()

    const taskInput = document.querySelector("#new-task-description").value;

    const newTask = document.createElement('li');
    newTask.innerText = taskInput

    taskList.appendChild(newTask);


  
  });

})
