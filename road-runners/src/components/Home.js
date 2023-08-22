import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';
import Logout from './Logout';
import { Link } from 'react-router-dom'; 

export default function Home() {
    const token = localStorage.getItem('token')
    return(
       <><nav><Link to='/logout'>Logout</Link></nav>
        <AddressForm/></>
    )
}
