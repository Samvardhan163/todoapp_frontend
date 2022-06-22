import React from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";
import useFetch from "../../api/useFetch/useFetch";
export default function Todo() {
  // const [todos, SetTodos] = useState([
  //   {
  //     id: 1,
  //     description: "Playing",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 2,
  //     description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 3,
  //     description: "Playing",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 4,
  //     description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 5,
  //     description: "Playing",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 6,
  //     description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 7,
  //     description: "Playing",
  //     completed: false,
  //     priority: false,
  //   },
  //   {
  //     id: 8,
  //     description:
  //       "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv dnefsndvfbd b  ",
  //     completed: false,
  //     priority: false,
  //   },
  // ]);

  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8080/api/todo/");

  return (
    <div className="todo">
      <Header title={"TODO"}></Header>
      {/* console.log(todos); */}
      {error && <div>{error}</div>}
      {/* {isPending && <div>Loading.....</div>} */}
      {todos && <TodoList todos={todos}></TodoList>}
    </div>
  );
}
