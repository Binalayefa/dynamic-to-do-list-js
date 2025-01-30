// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to load tasks from Local Storage and display them
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving again
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove-btn'); 

      // Add event listener to remove button
      removeBtn.addEventListener('click', () => {
          li.remove(); 
          removeTaskFromStorage(taskText);  // Remove task from Local Storage
      });

      // Append button to li, and li to task list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Save task to Local Storage
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }

      // Clear input field
      taskInput.value = "";
  }

  // Function to remove task from Local Storage
  function removeTaskFromStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Attach event listeners
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText); // Add task if input is not empty
    } else {
        alert("Please enter a task!"); // Alert if input is empty
    }
  });

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          const taskText = taskInput.value.trim();
          if (taskText !== "") {
              addTask(taskText); // Add task if input is not empty
          } else {
              alert("Please enter a task!"); // Alert if input is empty
          }
      }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
