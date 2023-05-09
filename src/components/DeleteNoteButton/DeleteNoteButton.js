// This component renders a button to delete a specific note.
// It takes a 'noteId' prop and a 'handleDelete' callback as props.
import React from 'react';

const DeleteNoteButton = ({ noteId, onDelete }) => {
  return (
    <button onClick={() => onDelete(noteId)}>Delete</button>
  );
};

export default DeleteNoteButton;
