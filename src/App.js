import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: []
    };
  }

  // add a new todo to the todo list
  addTodo = newTask => {
    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: newTask, id: Date.now(), completed: false }
      ]
    });
  };

  // when the todo item is clicked, toggle the completed property
  toggleComplete = id => {
    this.state.todoData.forEach((todo, index) => {
      if (todo.id === id) {
        // make a temp copy
        let todoData = [...this.state.todoData];
        // toggle completed property at current index
        todoData[index].completed = !this.state.todoData[index].completed;
        // update state with changed temp copy
        this.setState({ todoData: todoData });
      }
    });
  };

  // remove completed todos
  removeTodo = () => {
    // make a temp copy
    let todoData = [...this.state.todoData];
    // filter for incomplete tasks
    const incomplete = todoData.filter(todo => todo.completed === false);
    // update state with copy
    this.setState({ todoData: incomplete });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoData={this.state.todoData}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
