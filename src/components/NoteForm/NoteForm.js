import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, onUpdate, editingNote }) => {
    const [title, setTitle] = useState('');
  
    useEffect(() => {
      if (editingNote) {
        setTitle(editingNote.title);
      }
    }, [editingNote]);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) return;
        if (editingNote) {
          onUpdate({ ...editingNote, title });
        } else {
          onSubmit({ title, completed: false });
        }
        setTitle('');
      };
      
      

      const formStyles = {
        display: 'flex',
        marginBottom: '1rem',
      };
      
      const inputStyles = {
        flexGrow: 1,
        marginRight: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
      };
      
  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <label htmlFor="note-title" style={{ display: 'none' }}>
        Title:
      </label>
      <input
        id="note-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={inputStyles}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
