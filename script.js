var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleAll: function() {
    var trueCounter = 0;
    this.todos.forEach((element) => {
      if (element.completed === false) {
        element.completed = true;
      } else {
        trueCounter++;
      }
    })
    // but it they're all true...
    if (trueCounter === this.todos.length) {
      this.todos.forEach((element) => {
        element.completed = false;
      })
    }
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed
  }
};

var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var todoInput = document.getElementById("addTodoInput");
    todoList.addTodo(todoInput.value);
    todoInput.value = ""; // this sets the input to blank
    view.displayTodos();
  },
  changeTodo: function() {
    var position = document.getElementById("changeTodoPosition");
    var changeTodoInput = document.getElementById("changeTodoInput");
    todoList.changeTodo(position.valueAsNumber, changeTodoInput.value);
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var position = document.getElementById("toggleCompletedInput");
    todoList.toggleCompleted(position.valueAsNumber);
    position.value = "";
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    todoList.todos.forEach((element, position) => {
      var todoLi = document.createElement("li");
      var todo = element;
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    })
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todoUl = document.querySelector("ul");
    todoUl.addEventListener("click", function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(event.target.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();