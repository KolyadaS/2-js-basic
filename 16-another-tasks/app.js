"use strict";

const toDoList = {
  tasks: [
    {
      id: 1,
      title: "Помыть посуду",
      priority: 1,
    },
  ],

  addTask: function (task) {
    if (task["id"] === undefined) {
      task["id"] = this.tasks.length + 1;
    }
    while (this.tasks.some((elem) => elem.id === task["id"])) {
      console.log(
        `Задача ${
          task["id"]
        } уже существует. Попытка добавить эту задачу с ID = ${task["id"] + 1}`
      );
      task["id"]++;
    }
    this.tasks.push({ ...task });
    console.log(`Задача ${task["id"]} добавлена`);
  },

  deleteTask: function (id) {
    let delMark = false;
    if (typeof id === "number") {
      this.tasks.filter((elem, index) => {
        if (elem.id === id) {
          this.tasks.splice(index, 1);
          delMark = true;
          console.log(`Задача ${id} удалена`);
        }
      });
      if (!delMark) {
        console.log(
          `Не удалось удалить задачу: задача с ID = ${id} не существует`
        );
      }
    } else {
      console.log(
        `Не удалось удалить задачу: задача с ID = ${id} не существует`
      );
    }
  },

  updateTask: function (updatedTask) {
    const { id, ...others } = updatedTask;
    for (const index in this.tasks) {
      if (this.tasks[index].id == id) {
        const ob = others;
        for (const [key] of Object.entries(ob)) {
          if (this.tasks[index][key] !== ob[key]) {
            console.log(
              `Задача ${id}: поле ${key} изменено с "${this.tasks[index][key]}" на "${ob[key]}"`
            );
            this.tasks[index][key] = ob[key];
          } else {
            console.log(`Не удалось обновить задачу`);
          }
        }
      }
    }
  },

  sortByID: function (direction) {
    direction = direction.toLowerCase();
    switch (true) {
      case direction === "asc":
        this.tasks.sort((a, b) => a.id - b.id);
        console.log("Сортировка всех задач по возрастанию ID");
        break;
      case direction === "desc":
        this.tasks.sort((a, b) => b.id - a.id);
        console.log("Сортировка всех задач по убыванию ID");
        break;
      default:
        console.log(
          `sortByID: неверный параметр сортировки - ${direction}. Допустимые значения: asc и desc`
        );
    }
  },

  sortByPriority: function (direction) {
    direction = direction.toLowerCase();
    switch (true) {
      case direction === "asc":
        this.tasks.sort((a, b) => a.priority - b.priority);
        console.log("Сортировка всех задач по возрастанию приоритета");
        break;
      case direction === "desc":
        this.tasks.sort((a, b) => b.priority - a.priority);
        console.log("Сортировка всех задач по убыванию приоритета");
        break;
      default:
        console.log(
          `sortByPriority: неверный параметр сортировки - ${direction}. Допустимые значения: asc и desc`
        );
    }
  },
};

// toDoList.addTask({ title: "Почитать книгу", priority: 1 });
// toDoList.addTask({ id: 3, title: "Полить цветы", priority: 2 });
// toDoList.addTask({ title: "Поиграть с кошкой", priority: 2 });
// toDoList.addTask({ title: "Приготовить ужин", priority: 3 });
// toDoList.addTask({ title: "Постирать одежду", priority: 4 });

// toDoList.deleteTask(2);

// toDoList.updateTask({ id: 5, priority: 33 });
// toDoList.updateTask({ id: 5, title: "Купить диван", decs: "blabla" });

// toDoList.sortByID("desc");
// toDoList.sortByPriority("asc");

// console.log(toDoList.tasks);

// console.log("**********************************");

const newTask = {
  tasks: [{ id: 1, name: "тест", description: "описание", order: 0 }],
};

const newTaskAdd = toDoList.addTask.bind(newTask);
const newTaskDelete = toDoList.deleteTask.bind(newTask);
const newTaskUpdate = toDoList.updateTask.bind(newTask);
const newTaskSortByID = toDoList.sortByID.bind(newTask);
const newTaskSortByPriority = toDoList.sortByPriority.bind(newTask);

newTaskAdd({ id: -1, name: "тестX", description: "описаниеX", order: 0 });
newTaskAdd({ id: -1, name: "тест А", description: "описание А", order: 1 });
newTaskAdd({ id: 22, name: "тест Б", description: "описание Б", order: 3 });
newTaskAdd({ id: 1, name: "тест В", description: "описание В", order: 20 });
newTaskAdd({ id: 4, name: "тест Ё", description: "описание Ё", order: 222 });
newTaskAdd({ id: 5, name: "тест Г", description: "описание Г", order: 22 });

newTaskDelete(333);
newTaskDelete(22);
newTaskDelete("33.3");

newTaskUpdate({ id: 1, order: 333 });
newTaskUpdate({ id: 5, name: "Купить диван", description: "Синий" });

newTaskSortByID("desc");

console.log(newTask.tasks);
