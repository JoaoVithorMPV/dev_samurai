(() => {
  const todo = {
    description: "todo",
    done: false,
  };

  const reminder = {
    description: "reminder",
    date: "15.12.2021",
  };

  const taskView = {
    render(tasks: Array<Object>) {
      const tasksList = document.getElementById("taskList");
      while (tasksList?.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
      }
      tasks.forEach((task) => {
        const li = document.createElement("li");
        const textNode = document.createTextNode(JSON.stringify(task));
        li.appendChild(textNode);
        tasksList?.appendChild(li);
      });
    },
  };

  const TaskController = (view: typeof taskView) => {
    const tasks: Array<object> = [todo, reminder];

    const handleEvent = (event: Event) => {
      event.preventDefault();
      view.render(tasks);
    };

    document
      .getElementById("taskForm")
      ?.addEventListener("submit", handleEvent);
  };

  TaskController(taskView);
})();
