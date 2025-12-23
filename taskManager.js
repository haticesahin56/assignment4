class Task {
  constructor(id, title, completed) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true,
    });

    this.title = title;
    this.completed = completed;
  }

  toggle() {
    return new Task(this.id, this.title, !this.completed);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  setTasks(tasks) {
    this.tasks = [...tasks];
    return this.tasks;
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
    return this.tasks;
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    return this.tasks;
  }

  toggleTask(taskId) {
    this.tasks = this.tasks.map((t) => (t.id === taskId ? t.toggle() : t));
    return this.tasks;
  }
}
