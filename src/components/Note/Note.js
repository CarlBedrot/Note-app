import React from 'react';
import DeleteNoteButton from '../DeleteNoteButton/DeleteNoteButton';
import './Note.css'; 


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



// Truncate content if it exceeds the specified maxLength.
// Returns a truncated string with '...' at the end.
  const truncateContent = (content, maxLength = 50) => {
    if (content.length <= maxLength) {
      return content;
    }
    return content.slice(0, maxLength) + '...';
  };
// Note component that displays a single note
// Accepts the following props:
// - note: an object containing the note's data (id, title, content, date, completed)
// - onDelete: a function to handle deleting the note
// - onEdit: a function to handle editing the note
// - onToggleComplete: a function to handle toggling the note's completed status
// - onClick: a function to handle clicking on the note's title
  const Note = ({ note, onDelete, onEdit, onToggleComplete, onClick }) => {
    
   return (
  <li style={noteStyles}>
    <input
      type="checkbox"
      checked={note.completed}
      onChange={() => onToggleComplete(note)}
    />
    <div className="note-content-wrapper">
      <h3
        style={{ textDecoration: note.completed ? 'line-through' : 'none' }}
        onClick={() => onClick(note)}
      >
        {note.title}
      </h3>
      <div className="note-content">
        <p>{truncateContent(note.content)}</p>
      </div>
    </div>
    <p className="note-date">{note.date}</p> {}
    <div className="note-buttons">
      <DeleteNoteButton noteId={note.id} onDelete={onDelete} />
      <button onClick={() => onEdit(note)}>Edit</button>
    </div>
  </li>
);

      
};

export default Note;
