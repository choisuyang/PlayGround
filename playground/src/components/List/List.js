import React from "react";
import Todo from "../Todo/Todo";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <Todo setTodos={setTodos} todos={todos} todo={item} key={item.index} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default List;
