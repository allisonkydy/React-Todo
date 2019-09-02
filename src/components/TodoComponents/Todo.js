import React from 'react';

function Todo(props) {
   const { task, completed } = props;
   return (
      <div>{task}</div>
   )
}

export default Todo;
