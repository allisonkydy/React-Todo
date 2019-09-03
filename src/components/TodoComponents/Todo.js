import React from 'react';

function Todo(props) {
   const { task, toggleComplete, id, completed } = props;
   return (
      <div onClick={() => toggleComplete(id)} className={completed ? "complete" : "incomplete"}>{task}</div>
   )
}

export default Todo;
