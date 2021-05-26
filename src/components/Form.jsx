import React from "react";

function Form(props) {
  // Event Handlers
  const inputTextHandler = e => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    if (props.inputText !== "") {
      props.setTodos([
        ...props.todos,
        {
          id: Math.floor(Math.random() * 99999),
          string: props.inputText,
          completed: false,
        },
      ]);
    }
    props.setInputText("");
  };

  const statusHandler = e => {
    props.setStatus(e.target.value);
  };

  return (
    <form action="">
      <input
        value={props.inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        placeholder="Add todo"
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={statusHandler}
          name="todos"
          id=""
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
