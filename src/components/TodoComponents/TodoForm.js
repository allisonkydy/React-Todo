import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleInputChange = event => {
    this.setState({ newTask: event.target.value });
  };

  submitTodo = event => {
    // prevent page refresh
    event.preventDefault();
    // add new todo task
    this.props.addTodo(this.state.newTask);
    // reset form input
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          placeholder="enter a todo"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button type="submit">add todo</button>
        <button onClick={this.props.removeTodo}>clear completed</button>
      </form>
    );
  }
}

export default TodoForm;
