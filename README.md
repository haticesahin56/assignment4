
# Assignment 4 – Task Dashboard

In this project, I created a simple Task Dashboard using vanilla JavaScript.
The purpose of the assignment was to practice DOM manipulation, async/await,
ES6 classes, immutability, and JSON handling.

The application runs completely in the browser.
No frameworks or external libraries were used.

## File Structure

- index.html  
  Contains the basic HTML structure of the page.

- styles.css  
  Used for simple styling and to show completed tasks with a visual difference.

- taskManager.js  
  Includes the Task and TaskManager classes.
  Tasks are managed immutably and the task id is read-only.

- api.js  
  Simulates a server request using setTimeout and returns task data asynchronously.

- main.js  
  Handles loading tasks, rendering them to the DOM, and managing user interactions
  such as toggle and delete actions.

## Challenges

- Managing tasks without mutating the state
- Rendering the task list after each update
- Handling asynchronous data loading correctly
