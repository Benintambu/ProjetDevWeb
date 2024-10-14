import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Signin from './pages/Signin';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
