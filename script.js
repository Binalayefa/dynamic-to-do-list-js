document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      // Get the task text from the input field
      const taskText = taskInput.value.trim();

      // Check if the task is empty
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new list item (task)
      const newTask = document.createElement('li');
      newTask.textContent = taskText;

      // Create the remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      // Add event listener to remove the task when clicked
      removeButton.addEventListener('click', () => {
          taskList.removeChild(newTask);
      });

      // Append the remove button to the task item
      newTask.appendChild(removeButton);

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      taskInput.value = '';
  }

  // Event listener for the 'Add Task' button
  addButton.addEventListener('click', addTask);

  // Event listener to allow adding tasks by pressing Enter key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
