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
               key={todoItem.id}
               todoData={todoItem}
               toggleComplete={this.props.toggleComplete}
               />
            );
         })}
         </div>
      );
   }
}

export default TodoList;
