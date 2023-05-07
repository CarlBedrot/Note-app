import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList/NoteList';
import './App.css';
import NoteForm from './components/NoteForm/NoteForm';
import NoteDetails from './components/NoteDetails/NoteDetails'; 
import ModalWrapper from './components/ModalWrapper/ModalWrapper'; // Add this import



const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const loadNotesFromLocalStorage = () => {
  const savedNotes = localStorage.getItem('notes');
  return savedNotes ? JSON.parse(savedNotes) : [];
};

const App = () => {
  const [notes, setNotes] = useState(loadNotesFromLocalStorage());
  const [editingNote, setEditingNote] = useState(null);
  const [showNoteDetails, setShowNoteDetails] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    saveNotesToLocalStorage(notes);
  }, [notes]);

  const handleDelete = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };



  const handleAddNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content, // Add this line to include the content
      date: new Date().toISOString().slice(0, 10),
    };
    setNotes([...notes, newNote]);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  const handleToggleComplete = (toggledNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === toggledNote.id ? { ...note, completed: !note.completed } : note
    );
    setNotes(updatedNotes);
  };
  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowNoteDetails(true);
  };

  const handleCloseNoteDetails = () => {
    setShowNoteDetails(false);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1>Note App</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <NoteForm
          onSubmit={handleAddNote}
          onUpdate={handleUpdateNote}
          editingNote={editingNote}
        />
        <NoteList
          notes={notes}
          searchQuery={searchQuery}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggleComplete={handleToggleComplete}
          onClick={handleNoteClick}
        />
        <ModalWrapper isOpen={showNoteDetails} onRequestClose={handleCloseNoteDetails}>
          <NoteDetails
            note={selectedNote}
            onUpdate={handleUpdateNote}
            onClose={handleCloseNoteDetails}
          />
        </ModalWrapper>
      </div>
    </div>
  );
};

export default App;
