import React,{useContext} from 'react'
import notesContext from '../context/notes/notesContext';

function NoteItem(props) {
  
  const context = useContext(notesContext);
  const { delNote } = context;
  const { notes,updateNote } = props;

  const handle_delNote=(id)=>{
    delNote(id);
  }
  return (
    // <div className="row">
    <div className="col-sm-4 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className=''>{(notes.date)}</p>
          <p className="card-text">{notes.description}</p>
          <b>Tags :</b> {notes.tag}<br />
          <div className="d-flex flex-row-reverse">
            <i className="fa-solid fa-trash-can m-2" onClick={()=>{handle_delNote(notes._id)}}></i>
            <i className="fa-regular fa-pen-to-square m-2" onClick={()=>{updateNote(notes)}}></i>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  )
}

export default NoteItem
