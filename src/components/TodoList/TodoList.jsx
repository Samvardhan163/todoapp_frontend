import React from "react";
import { useState } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import {
  FaAlignCenter,
  FaEdit,
  FaHeart,
  FaPlus,
  FaStar,
  FaTrash,
  FaTrashAlt,
  IconName,
} from "react-icons/fa";
import "./TodoList.css";
export default function TodoList() {
  const [todos, SetTodos] = useState([
    {
      id: 1,
      description: "Playing",
      completed: false,
      priority: false,
    },
    {
      id: 2,
      description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
      completed: false,
      priority: false,
    },
    {
      id: 3,
      description: "Playing",
      completed: false,
      priority: false,
    },
    {
      id: 4,
      description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
      completed: false,
      priority: false,
    },
    {
      id: 5,
      description: "Playing",
      completed: false,
      priority: false,
    },
    {
      id: 6,
      description: "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv",
      completed: false,
      priority: false,
    },
    {
      id: 7,
      description: "Playing",
      completed: false,
      priority: false,
    },
    {
      id: 8,
      description:
        "sleepingrbfn dkvldjfvnfjdnvfj jdnf sbilnheb vjn rbehbv dnefsndvfbd b  ",
      completed: false,
      priority: false,
    },
  ]);

  function updateTodo(id) {
    let updatedTaskPriority = todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = !todo.priority;
        return todo;
      } else {
        return todo;
      }
    });
    SetTodos(updatedTaskPriority);
  }
  function updateTodoTask(id) {
    let updatedTaskCompletedStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    SetTodos(updatedTaskCompletedStatus);
  }
  return (
    <>
      <div className="grid-container">
        {todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            <div
              className={`todo-task ${todo.completed && "todo-task-completed"}`}
              onClick={() => {
                updateTodoTask(todo.id);
              }}
            >
              {todo.description}
            </div>
            <FaStar
              className={`todo-priority ${
                todo.priority && "todo-priority-active"
              }`}
              onClick={() => {
                updateTodo(todo.id);
              }}
            ></FaStar>
            <FaTrash className="todo-delete"></FaTrash>
            <FaEdit className="todo-edit"></FaEdit>
          </div>
        ))}
      </div>
      <TodoFooter></TodoFooter>
    </>
  );
}
