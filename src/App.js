import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Signin from './pages/Signin';
import Home from './pages/Home';
import Event from './pages/Event';
import Menu from './pages/Menu';
import Profil from './pages/Profil';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ModifProfil from './pages/ModifProfil';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/modifProfil' element={<ModifProfil />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
