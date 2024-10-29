import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Event from './pages/Event';
import Menu from './pages/Menu';
import Profil from './pages/Profil';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ModifProfil from './pages/ModifProfil';
import Histo from './pages/Histo';
import Parr from './pages/Parr';
import Promo from './pages/Promo';
import AdminLogin from './pages/AdminLogin';
import AdminMenu from './pages/AdminMenu';
import AdminPlate from './pages/AdminPlate';
import AdminEmpl from './pages/AdminEmpl';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/modifProfil' element={<ModifProfil />}></Route>
        <Route path='/histo' element={<Histo />}></Route>
        <Route path='/parr' element={<Parr />}></Route>
        <Route path='/promo' element={<Promo />}></Route>
        <Route path='/admin_log' element={<AdminLogin />}></Route>
        <Route path='/admin_menu' element={<AdminMenu />}></Route>
        <Route path='/admin_plate' element={<AdminPlate />}></Route>
        <Route path='/admin_empl' element={<AdminEmpl />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
