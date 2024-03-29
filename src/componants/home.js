import React from 'react';
import Notes from './notes.js';

function Home(props) {
  // eslint-disable-next-line
  const showAlert=props;
  return (
    <div className="container mb-5">
        <Notes key={Notes._id} showAlert={props.showAlert} />
    </div>

  )
}

export default Home
