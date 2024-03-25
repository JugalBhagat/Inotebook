import React from 'react';
import Notes from './notes.js';

function Home() {
  return (
    <div className="container mb-5">
    <div className="row">
      <div className='cold-lg-6 col-md-12 col-sm-12'>
        <h2 className='mt-5 mb-4'>Add a Note</h2>
        <form className='w-100'>
          <div className="mb-3">
            <input type="text" className="form-control" id="title" placeholder="title" />
          </div>
          <div className="mb-3">
            <textarea type="text" className="form-control" rows="5" id="description" placeholder="description..." />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="tags" placeholder="tags" />
          </div>
          <div className="mb-3 tex">
            <button type="submit" className="btn btn-primary w-25">Save</button>
          </div>
        </form>
      </div>
      <div className='mt-5 row'>
        <Notes />
      </div>
    </div>
    </div>

  )
}

export default Home
