const elForm = document.querySelector(".input-container");
const elTaskContainer = document.querySelector(".task-container");

const tasks = [];

const showTasks = (tasks) => {
  elTaskContainer.innerHTML = "";

  tasks.forEach((ts) => {
    const newTask = `
        <li class="task">
          <div class="task-body">
            <input type="checkbox" ${ts.isDone ? "checked" : ""} />
            <p class="task-text">${ts.task}</p>
          </div>
          <button class="btn-edit">
            <img src="./icons/edit.svg" alt="pencil" />
          </button>
          <button class="btn-delete" onclick="deleteTask(this, ${
            ts.id
          })" data-id='${ts.id}'>
            <img src="./icons/delete.svg" alt="trash" />
          </button>
        </li>`;

    elTaskContainer.insertAdjacentHTML("beforeend", newTask);
  });
};

const deleteTask = (el, id) => {
  const taskIndex = tasks.findIndex((ts) => ts.id == id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }

  showTasks(tasks);
};

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = e.target.task.value;

  tasks.push({
    isDone: false,
    task: newTask.trim(),
    id: tasks.at(-1)?.id + 1 || 1,
  });

  showTasks(tasks);

  // Form inputlarining ma'lumotini tozalab yuborish
  this.reset();
});

window.deleteTask = deleteTask;
