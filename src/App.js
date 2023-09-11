import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './component/Navbar'
import { Home } from './component/Home'
import About from './component/About'
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
