import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: [],
      newTodo: {}
    };
  }

  // adds new Todo object to todoData array
  addTodo = newTask => {
    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: newTask, id: Date.now(), completed: false }
      ]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
