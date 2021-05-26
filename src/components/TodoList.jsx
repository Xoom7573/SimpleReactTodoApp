import React from "react";

// Import Components
import Todo from "./subComps/Todo.jsx";

function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              string={todo.string}
              todos={props.todos}
              setTodos={props.setTodos}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
