import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: []
    };
  }

  // add a new todo to the todo list
  addTodo = newTask => {
    if (newTask.length > 0) this.setState({
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
        todoData[index].completed = !todo.completed;
        // update state with changed temp copy
        this.setState({ todoData: todoData });
      }
    });
  };

  // remove completed todos
  removeTodo = () => {
    // filter for incomplete tasks
    const incomplete = this.state.todoData.filter(
      todo => !todo.completed
    );
    // update state with copy
    this.setState({ todoData: incomplete });
  };

  render() {
    return (
      <div className="App">
        <h1>a cool and nice todo app</h1>
        <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo} />
        <TodoList
          todoData={this.state.todoData}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
