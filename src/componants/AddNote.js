import React, { useState } from 'react'
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';

function AddNote() {
    const context = useContext(notesContext);
    const {addNote } = context;

    const [note,setNote]=useState({title:"",description:"",tag:""});
    
    const handleOnClick=(e)=>{
        e.preventDefault();               //to NOT submit form
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        
    }
    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})          //to keep default value
    }
    return (
        <div className='cold-lg-6 col-md-12 col-sm-12 my-5 '>
            <h2 className='mt-5 mb-4'>Add a Note</h2>
            <form className='w-100' name="form1">
                <div className="mb-3">
                    <input type="text" className="form-control" id="title" placeholder="title" value={note.title} name="title" minLength={5} required onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" rows="5" id="description" value={note.description} name="description" minLength={5} required placeholder="description..." onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tags" placeholder="tags" value={note.tag}  minLength={5} required name="tag" onChange={handleOnChange} />
                </div>
                <div className="mb-3 tex">
                    <button type="submit" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<5} className="btn btn-primary w-25" onClick={handleOnClick}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
