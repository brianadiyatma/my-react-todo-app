import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Header from "../Header/Header";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} />
      <ul className="list-group list-group-flush">
        {props.items.map((item, i) => (
          <TodoItem item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
