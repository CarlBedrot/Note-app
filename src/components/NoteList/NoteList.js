// NoteList.js
import React from 'react';
import Note from '../Note/Note';
import './NoteList.css';
import './sidebar.css';

const categorizeNotes = (notes) => {
  const categorizedNotes = {};

  notes.forEach((note) => {
    const noteDate = new Date(note.date).toISOString().slice(0, 10);
    if (!categorizedNotes[noteDate]) {
      categorizedNotes[noteDate] = [];
    }
    categorizedNotes[noteDate].push(note);
  });

  return categorizedNotes;
};

const NoteList = ({
  notes,
  searchQuery,
  onDelete,
  onEdit,
  onToggleComplete,
  onClick,
}) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const categorizedNotes = categorizeNotes(filteredNotes);

  return (
    <div className="note-list-container">
      <div className="sidebar">
        {Object.keys(categorizedNotes).map((date) => (
          <>
            <h2>Today</h2>
            <ul>
            {categorizedNotes[date].map((note) => (
  <li>
    <button
      className="note-link"
      onClick={() => onClick(note)}
    >
      {note.title}
    </button>
  </li>
))}
            </ul>
          </>
        ))}
      </div>
      <div className="note-list">
        {filteredNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleComplete={onToggleComplete}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
