import React, { useState, useEffect } from 'react';
// NoteDetails component for displaying and editing note details
// Accepts the following props:
// - note: an object containing the note's data (id, title, content, date, completed)
// - onUpdate: a function to handle updating the note's content
// - onClose: a function to handle closing the NoteDetails component


const NoteDetails = ({ note, onUpdate, onClose }) => {
      // State for managing the content of the note

  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setContent(note.content || '');
    }
  }, [note]);

    // Handles form submission to update the note's content
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...note, content });
    onClose();
  };

    // Render the component
  return (
    <div className="note-details-modal">
      <div className="note-details-content">
        <h2>{note.title}</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Add note details..."
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteDetails;
