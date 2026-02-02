import { useState } from "react";
import TodoList from "./components/TodoList";
import CreateDialog from "./components/CreateDialog";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  const filteredTodos = todos.filter(t => {
    const matchSearch = t.text.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" ||
      (filter === "done" && t.done) ||
      (filter === "progress" && !t.done);
    return matchSearch && matchFilter;
  });

  return (
    <div className={`container ${theme}`}>

      <h2>TODO</h2>
      <button className="theme-btn" onClick={toggleTheme}>
  {theme === "light" ? "🌙" : "☀️"}
</button>

      <div className="top">
        <input
          placeholder="Input search key"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => setShowCreate(true)}>Create</button>
      </div>

      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("progress")}>In-progress</button>
      </div>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleDone}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />

      {showCreate && (
        <CreateDialog
          onClose={() => setShowCreate(false)}
          onCreate={addTodo}
        />
      )}
    </div>
  );
}
