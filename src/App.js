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
import { Alert } from './component/Alert';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert />
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
