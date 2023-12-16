import logo from './logo.svg';
// import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import AddressForm from './components/AddressForm';
import NavMenu from './components/NavMenu';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [showNav, setShowNav] = useState();
  useEffect(() => {
    const token = localStorage.getItem('token');
    !token ? setShowNav(false) : setShowNav(true);
  }, []);
  console.log(showNav);
  return (
    <div className='App'>
      {showNav && (
        <nav>
          <NavMenu />
          <Link to='/logout'>Logout</Link>
        </nav>
      )}
      <Routes>
        <Route path='rr' element={
          <PrivateRoute>
            <Home setShowNav={setShowNav}/>
          </PrivateRoute>
        } />
        <Route path='/' element={<Login setShowNav={setShowNav} />} />
        <Route path='address-form' element={<AddressForm />} />
        <Route path='logout' element={<Logout setShowNav={setShowNav} />} />
      </Routes>
    </div>
  );
}

export default App;
