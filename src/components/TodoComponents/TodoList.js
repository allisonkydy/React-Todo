import React from "react";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.todoData.map(todoItem => {
        return (
          <Todo
            task={todoItem.task}
            key={todoItem.id}
            completed={todoItem.completed}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
