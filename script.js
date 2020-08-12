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
    // setting all to true
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === false) {
        this.todos[i].completed = true;
      } else {
        trueCounter++;
      }
    }
    // but it they're all true...
    if (trueCounter === this.todos.length) {
      for (var k = 0; k < this.todos.length; k++) {
        this.todos[k].completed = false;
      }
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
  deleteTodo: function() {
    var position = document.getElementById("deleteTodoPosition");
    todoList.deleteTodo(position.valueAsNumber);
    position.value = "";
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
    var todosUl = document.querySelector('ul');
    console.log(todosUl);
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];

      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};