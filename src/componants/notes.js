import React from 'react';
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function Notes() {
  const context = useContext(notesContext);
  // eslint-disable-next-line
  const { notes, addNote } = context;
  
  return (
    <>
      <AddNote />
      <div className='row'>
        <h2>Your Notes</h2>
        {notes.map((notes) => {
          return <NoteItem notes={notes} />;
        })}
      </div>
    </>
  )
}

export default Notes
