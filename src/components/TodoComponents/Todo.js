import React from "react";

import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div
        onClick={() => this.props.toggleComplete(this.props.todoData.id)}
        className={this.props.todoData.completed ? "complete" : "incomplete"}
      >
        {this.props.todoData.task}
      </div>
    );
  }
}

export default Todo;
