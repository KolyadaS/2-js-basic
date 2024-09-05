"use strict";

const toDoList = {
  tasks: [
    {
      title: "Помыть посуду",
      id: 1,
      priority: 1,
    },
  ],

  addTask: function (title, priority) {
    if (typeof title === "string" && typeof priority === "number") {
      let id = 0;
      for (const key in this.tasks) {
        if (this.tasks[key].id > id) {
          id = this.tasks[key].id;
        }
      }
      id++;
      this.tasks.push({ title, id, priority });
    } else {
      console.log(
        "Не удалось добавить задачу: передан неверный заголовок или приоритет"
      );
    }
  },

  deleteTask: function (id) {
    if (typeof id === "number") {
      this.tasks.splice(id - 1, 1);
      console.log(`Задача ${id} удалена`);
    } else {
      console.log(`Не удалось удалить задачу: передан неверный идентификатор`);
    }
  },

  updateTask: function (id, param) {
    const typeOfValidParams = ["number", "string"];
    if (typeOfValidParams.includes(typeof param) && typeof id === "number") {
      for (const key of Object.keys(this.tasks)) {
        if (this.tasks[key].id === id) {
          if (typeof param === "number") {
            console.log(
              `Задача ${this.tasks[key].id}: приоритет изменен с ${this.tasks[key].priority} на ${param}`
            );
            this.tasks[key].priority = param;
          } else {
            console.log(
              `Задача ${this.tasks[key].id}: описание изменено с ${this.tasks[key].title} на ${param}`
            );
            this.tasks[key].title = param;
          }
        }
      }
    } else {
      console.log(
        `Не удалось обновить задачу: недопустимое значение идентификатора либо обновляемого поля`
      );
    }
  },

  sortTasks: function (field, direction) {
    field = field.toLowerCase();
    direction = direction.toLowerCase();
    switch (true) {
      case field === "id" && direction === "asc":
        this.tasks.sort((a, b) => a.id - b.id);
        break;
      case field === "id" && direction === "desc":
        this.tasks.sort((a, b) => b.id - a.id);
        break;
      case field === "priority" && direction === "asc":
        this.tasks.sort((a, b) => a.priority - b.priority);
        break;
      case field === "priority" && direction === "desc":
        this.tasks.sort((a, b) => b.priority - a.priority);
        break;
      default:
        console.log(
          "Неверные параметры сортировки. Допустимые поля: id и priority, направления: asc и desc"
        );
    }
  },
};

toDoList.addTask("Почитать книгу", 1);
toDoList.addTask("Полить цветы", 2);
toDoList.addTask("Поиграть с кошкой", 2);
toDoList.addTask("Приготовить ужин", 3);
toDoList.addTask("Постирать одежду", 3);

toDoList.deleteTask(2);

toDoList.updateTask(1, 3);
toDoList.updateTask(3, "Купить диван");

toDoList.sortTasks("ID", "desc");

console.log(toDoList.tasks);
