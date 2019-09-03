import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="TodoList">
         {this.props.todoData.map(todoItem => {
            return (
               <Todo
               task={todoItem.task}
               key={todoItem.id}
               id={todoItem.id}
               completed={todoItem.completed}
               toggleComplete={this.props.toggleComplete}
               />
            );
         })}
         </div>
      );
   }
}

export default TodoList;
