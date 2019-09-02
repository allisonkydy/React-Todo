import React from 'react';

function TodoForm(props) {
   return (
      <form onSubmit={props.handleSubmit}>
         <input type="text" placeholder="enter a todo" onChange={props.handleInputChange} />
         <button type="submit">add todo</button>
         <button>clear completed</button>
      </form>
   )
}

export default TodoForm;
