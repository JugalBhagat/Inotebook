import React from 'react'

function NoteItem(props) {
    const {notes}=props;
  return (
    // <div class="row">
    <div class="col-sm-4 mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{notes.title}</h5>
          <p className=''>{(notes.date)}</p>
          <p class="card-text">{notes.description}</p>
          <b>Tags :</b> {notes.tag}<br/>
          <button type="button" class="btn btn-primary">Edit</button>
          <button type="button" class="btn btn-danger m-3">Delete</button>
        </div>
      </div>
    </div>
//   </div>
  )
}

export default NoteItem
