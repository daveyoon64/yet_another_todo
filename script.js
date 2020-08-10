var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("The todo list is empty!");
    } else {
      console.log("My Todos:");
      for(var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log(`(x) ${this.todos[i].todoText}`);
        } else {
          console.log(`( ) ${this.todos[i].todoText}`);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
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
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var todoInput = document.getElementById("addTodoInput");
    todoList.addTodo(todoInput.value);
    todoInput.value = ""; // this sets the input to blank
  }
};