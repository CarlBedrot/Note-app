import React, { useState } from 'react';
// NoteForm component for creating and updating notes
// Accepts the following props:
// - onSubmit: a function to handle submitting a new note
// - onUpdate: a function to handle updating an existing note
// - editingNote: an optional object containing the note's data (id, title, content, date, completed) if editing a note


const NoteForm = ({ onSubmit, onUpdate, editingNote }) => {
      // State for managing the note title and content
    const [noteTitle, setNoteTitle] = useState(editingNote ? editingNote.title : '');
    const [noteContent, setNoteContent] = useState(editingNote ? editingNote.content : ''); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (editingNote) {
        onUpdate({ ...editingNote, title: noteTitle, content: noteContent });
      } else {
        onSubmit({ title: noteTitle, content: noteContent }); 
      }
      setNoteTitle('');
      setNoteContent(''); 
    };
        // Render the component
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={noteTitle}
            onChange={(event) => setNoteTitle(event.target.value)}
            placeholder="Enter note title"
          />
          <input
            type="text"
            value={noteContent}
            onChange={(event) => setNoteContent(event.target.value)} 
            placeholder="Enter note content"
          />
          <button type="submit">{editingNote ? 'Update' : 'Add'} Note</button>
        </form>
      );
    };

export default NoteForm;
