import "./App.css";
import React, { useState, useEffect } from "react";

// Importing Components
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList";

// Example todo
const ExTodo = [
  { id: 1, string: "Dishes", completed: false },
  { id: 2, string: "Homework", completed: false },
  { id: 3, string: "Study", completed: false },
];

function App() {
  // General State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(ExTodo);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(ExTodo);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // UseEffect Example (runs when todos changes or status changes).
  useEffect(filterHandler, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Xoom's ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={filteredTodos} status={status} />
    </div>
  );
}

export default App;
