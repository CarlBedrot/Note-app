import React from 'react';

const DeleteNoteButton = ({ noteId, onDelete }) => {
  return (
    <button onClick={() => onDelete(noteId)}>Delete</button>
  );
};

export default DeleteNoteButton;
