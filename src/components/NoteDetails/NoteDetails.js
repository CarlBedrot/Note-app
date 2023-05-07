import React, { useState, useEffect } from 'react';

const NoteDetails = ({ note, onUpdate, onClose }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setContent(note.content || '');
    }
  }, [note]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...note, content });
    onClose();
  };

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
