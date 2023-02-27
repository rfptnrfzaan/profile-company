import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
  );
}

export default App;
