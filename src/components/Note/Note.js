import React from 'react';
import DeleteNoteButton from '../DeleteNoteButton/DeleteNoteButton';

const noteStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    padding: '1rem',
    marginBottom: '1rem',
  };

const Note = ({ note, onDelete, onEdit, onToggleComplete }) => {
  return (
    <li style={noteStyles}>
      <input
        type="checkbox"
        checked={note.completed}
        onChange={() => onToggleComplete(note)}
      />
      <h3 style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
        {note.title}
      </h3>
      <p>{note.date}</p>
      <DeleteNoteButton noteId={note.id} onDelete={onDelete} />
      <button onClick={() => onEdit(note)}>Edit</button>
    </li>
  );
};

export default Note;
