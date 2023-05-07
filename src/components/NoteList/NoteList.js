import React from 'react';
import Note from '../Note/Note';
import './NoteList.css';

const NoteList = ({ notes, searchQuery, onDelete, onEdit, onToggleComplete }) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default NoteList;
