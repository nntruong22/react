import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  if (todos.length === 0) return <p>No search found</p>;

  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={onToggle}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ));
}