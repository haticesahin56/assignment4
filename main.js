const manager = new TaskManager();

const loadBtn = document.getElementById("loadTasksBtn");
const statusEl = document.getElementById("statusMessage");
const listEl = document.getElementById("taskList");

function setStatus(msg) {
  statusEl.textContent = msg;
}

function clearList() {
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }
}

function renderTasks() {
  clearList();

  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) taskDiv.classList.add("completed");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      renderTasks();
    });

    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      renderTasks();
    });

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);

    listEl.appendChild(taskDiv);
  });
}

loadBtn.addEventListener("click", async () => {
  setStatus("Loading tasks...");

  try {
    const rawData = await fetchTasks();

    const json = JSON.stringify(rawData);
    const parsed = JSON.parse(json);

    const tasks = parsed.map(
      (t) => new Task(t.id, t.title, t.completed)
    );

    manager.setTasks(tasks);
    renderTasks();
    setStatus("");
  } catch (err) {
    setStatus("Error loading tasks");
  }
});
