import React from 'react'

function NoteItem(props) {
  const { notes } = props;
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
            <i className="fa-solid fa-trash-can m-2"></i>
            <i className="fa-regular fa-pen-to-square m-2"></i>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  )
}

export default NoteItem
