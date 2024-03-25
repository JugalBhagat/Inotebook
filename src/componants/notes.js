import React from 'react';
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';

function Notes() {
  const context=useContext(notesContext);
  const {notes}=context; 
  return (
    <div className='row'>
      <h3>Your Notes</h3>
      {notes.map((notes)=>{
        return <NoteItem notes={notes}/>;
        })}
    </div>
  )
}

export default Notes
