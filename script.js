// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim(); // Get input and remove whitespace

      if (taskText === "") {
          alert("Please enter a task!"); // Alert if input is empty
          return;
      }

      // Create task list item (li)
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove-btn'); 

      

      // Add event listener to remove button
      removeBtn.addEventListener('click', () => {
          li.remove();
      });

      // Append button to li, and li to task list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear input field
      taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask); // Click event for the button

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask(); // Call addTask when Enter is pressed
      }
  });
});

