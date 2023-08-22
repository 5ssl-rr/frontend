import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import AddressForm from './components/AddressForm';


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      
    <Routes>
      <Route path ='rr' element={<Home/>}/>
      <Route path ='/' element={<Login/>}/>
      <Route path = 'logout' element={<Logout/>}/>
    </Routes>
    </div>
  );
}

export default App;
