import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoApp;
