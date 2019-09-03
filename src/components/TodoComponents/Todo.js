import React from "react";

import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div
        onClick={() => this.props.toggleComplete(this.props.id)}
        className={this.props.completed ? "complete" : "incomplete"}
      >
        {this.props.task}
      </div>
    );
  }
}

export default Todo;
