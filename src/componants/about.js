import React,{useContext, useEffect} from 'react'
import NotesContext from '../context/notes/notesContext'

function About() {
  const a= useContext(NotesContext);
  a.update();
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  },[])
  
  return (
    <div>
      <p>This is About page {a.state.name} and his email is {a.state.email}</p>
    </div>
  )
}

export default About
