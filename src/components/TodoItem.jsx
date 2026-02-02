import { useState } from "react";
import UpdateDialog from "./UpdateDialog";
import DeleteDialog from "./DeleteDialog";

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="todo">
      <span
  className={todo.done ? "done" : ""}
  onClick={() => onToggle(todo.id)}
>
  {todo.text}
</span>


      <div>
        <button onClick={() => setShowDelete(true)}>🗑</button>
        <button onClick={() => setShowUpdate(true)}>✏</button>
      </div>

      {showUpdate && (
        <UpdateDialog
          todo={todo}
          onClose={() => setShowUpdate(false)}
          onSave={onUpdate}
        />
      )}

      {showDelete && (
        <DeleteDialog
          onClose={() => setShowDelete(false)}
          onDelete={() => onDelete(todo.id)}
        />
      )}
    </div>
  );
}
