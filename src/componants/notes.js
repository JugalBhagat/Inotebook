import React, { useEffect,useState } from 'react';
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useRef } from "react";

function Notes() {
  const context = useContext(notesContext);
  // eslint-disable-next-line
  const { notes, getallNotes ,editNote } = context;
  const ref = useRef(null);
  const ref_close = useRef(null);
  const [note,setNote]=useState({id:"",title:"",description:"",tag:"default"});

  useEffect(() => {
    getallNotes();
    // eslint-disable-next-line
  }, [])

  const updateNote = (current_note) => {
    ref.current.click();
    setNote(current_note);
  }

  const handleOnClick = () => { 
    editNote(note._id,note.title,note.description,note.tag); 
    ref_close.current.click();        
  }
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })          //to keep default value
  }

  return (
    <>
      <AddNote />
      <button className='btn btn-primary d-none' ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">View Modal</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='w-100' name="form1">
                <div className="mb-3">
                  <input type="text" className="form-control" id="title" minLength={5} required  name="title" value={note.title} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <textarea type="text" className="form-control" rows="5" minLength={5} required id="description" name="description" value={note.description}  onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="tags" name="tag" minLength={5} required  value={note.tag}  onChange={handleOnChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={ref_close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<5} className="btn btn-primary" onClick={handleOnClick}>Apply Changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length===0 && "No Notes to Display"}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} notes={note} />;
        })}
      </div>
    </>
  )
}

export default Notes
