import React from "react";

function Todo(props) {
  // Handlers
  const completeHandler = e => {
    props.setTodos(
      props.todos.map(item => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const deleteHandler = e => {
    props.setTodos(props.todos.filter(element => element.id !== props.todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""} `}>
        {props.string}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
