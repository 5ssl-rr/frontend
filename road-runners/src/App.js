import logo from './logo.svg';
// import './App.css';
// import './index.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import AddressForm from './components/AddressForm';
import NavMenu from './components/NavMenu';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='rr'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/' element={<Login />} />
        <Route
          path='address-form'
          element={
            <PrivateRoute>
              <AddressForm />
            </PrivateRoute>
          }
        />
        <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
