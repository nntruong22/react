import { useState } from "react";

export default function UpdateDialog({ todo, onClose, onSave }) {
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (!text.trim()) return alert("Please enter todo name!");
    if (text !== todo.text) onSave(todo.id, text);
    onClose();
  };

  return (
    <div className="dialog">
      <h3>Update todo</h3>
      <input autoFocus value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}