import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './component/Navbar'
import { Home } from './component/Home'
import About from './component/About'
import NoteState from './context/notes/NoteState';
import { Alert } from './component/Alert';
import Signup from './component/Signup';
import Login from './component/Login';

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
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
