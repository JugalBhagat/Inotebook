import React, { useContext } from 'react'
import notesContext from '../context/notes/notesContext';

function Home() {
  const context=useContext(notesContext);
  const {notes,setnotes}=context;

  return (
    <div>
      <h2 className='mt-5 mb-4'>Add a Note</h2>
      <form className='w-50'>
        <div className="mb-3">
          <input type="text" className="form-control" id="title" placeholder="title" />
        </div>
        <div className="mb-3">
          <textarea type="text" className="form-control" rows="7" id="description" placeholder="description..." />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="tags" placeholder="tags" />
        </div>
        <div className="mb-3 tex">
        <button type="submit" onClick="" className="btn btn-primary w-25">Save</button>
        </div>
      </form>
      <h3>Your Notes</h3>
      {notes.map((notes)=>{
        return notes.title;
        })}
    </div>
  )
}

export default Home
