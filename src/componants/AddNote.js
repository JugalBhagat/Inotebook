import React, { useState } from 'react'
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';

function AddNote() {
    const context = useContext(notesContext);
    const {addNote } = context;

    const [note,setNote]=useState({title:"",description:"",tag:"default"});
    
    const handleOnClick=(e)=>{
        addNote(note.title,note.description,note.tag);
        e.preventDefault();               //to NOT submit form
    }
    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})          //to keep default value
    }
    return (
        <div className='cold-lg-6 col-md-12 col-sm-12 my-5 '>
            <h2 className='mt-5 mb-4'>Add a Note</h2>
            <form className='w-100' name="form1">
                <div className="mb-3">
                    <input type="text" className="form-control" id="title" placeholder="title" name="title" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" rows="5" id="description" name="description" placeholder="description..." onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tags" placeholder="tags" name="tag" onChange={handleOnChange} />
                </div>
                <div className="mb-3 tex">
                    <button type="submit" className="btn btn-primary w-25" onClick={handleOnClick}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
