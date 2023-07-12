import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import AddressForm from './components/AddressForm';


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
    <Routes>
      <Route path ='/' element={<AddressForm/>}/>
      <Route path ='rr' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
