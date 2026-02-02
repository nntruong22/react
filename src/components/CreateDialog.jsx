import { useState } from "react";

export default function CreateDialog({ onClose, onCreate }) {
  const [text, setText] = useState("");

  const handleCreate = () => {
    if (!text.trim()) return alert("Please enter todo name!");
    onCreate(text);
    onClose();
  };

  return (
    <div className="dialog">
      <h3>Create new todo</h3>
      <input autoFocus value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
