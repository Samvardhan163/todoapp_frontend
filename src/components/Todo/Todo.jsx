import React from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

export default function Todo() {
  return (
    <div className="todo">
      <Header title={"TODO"}></Header>
      <TodoList></TodoList>
    </div>
  );
}
