import React from "react";
import { useState, useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import { FaEdit, FaStar, FaTrash } from "react-icons/fa";
import "./TodoList.css";
export default function TodoList(props) {
  const [todos, SetTodos] = useState([]);

  useEffect(() => {
    console.log(props.todos);
    SetTodos(props.todos.data ? props.todos.data : []);
  }, [props]);

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
          <div
            className="todo-card"
            key={todo.id}
            data-testid={`todo-card-${todo.id}`}
          >
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
