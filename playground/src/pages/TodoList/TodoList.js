import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import "./TodoList.css";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  console.log("hi", filteredTodos);
  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <List setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}
