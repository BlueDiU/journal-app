import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

function JournalEntries() {
  const { notes } = useSelector((state) => state.notes);

  /* const [notesState, setNotesState] = useState([]);

  const getNotes = async () => {
    await notes;

    setNotesState(notes);
  };

  useEffect(() => {
    getNotes();

    console.log('agreadado');
  }, [notes]); */

  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  );
}

export default JournalEntries;
