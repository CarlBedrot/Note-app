import React, { useState } from 'react';

const NoteForm = ({ onSubmit, onUpdate, editingNote }) => {
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
