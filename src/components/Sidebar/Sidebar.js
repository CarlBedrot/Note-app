import React from 'react';
import './Sidebar.css';

const Sidebar = ({ notes, onNoteClick }) => {
  const categorizedNotes = {
    today: [],
    yesterday: [],
    previousSevenDays: [],
  };

  const currentDate = new Date();
  notes.forEach((note) => {
    const noteDate = new Date(note.date);
    const timeDifference = currentDate - noteDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      categorizedNotes.today.push(note);
    } else if (daysDifference === 1) {
      categorizedNotes.yesterday.push(note);
    } else if (daysDifference > 1 && daysDifference <= 7) {
      categorizedNotes.previousSevenDays.push(note);
    }
  });

  const renderNotes = (notes) => {
    return notes.map((note) => (
      <li key={note.id} onClick={() => onNoteClick(note)}>
        {note.title}
      </li>
    ));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-category">
        <h4>Today</h4>
        <ul>{renderNotes(categorizedNotes.today)}</ul>
      </div>
      <div className="sidebar-category">
        <h4>Yesterday</h4>
        <ul>{renderNotes(categorizedNotes.yesterday)}</ul>
      </div>
      <div className="sidebar-category">
        <h4>Previous Seven Days</h4>
        <ul>{renderNotes(categorizedNotes.previousSevenDays)}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
