export default function DeleteDialog({ onClose, onDelete }) {
  return (
    <div className="dialog">
      <h3>Delete this todo</h3>
      <p>Are you sure?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
