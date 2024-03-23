
import './App.css';
import Navbar from './componants/Navbar';
import Home from './componants/home';
import About from './componants/about';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from './context/notes/notesState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/index" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
