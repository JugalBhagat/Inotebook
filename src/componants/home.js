import React from 'react';
import Notes from './notes.js';

function Home() {
  return (
    <div className="container mb-5">
        <Notes key={Notes._id} />
    </div>

  )
}

export default Home
