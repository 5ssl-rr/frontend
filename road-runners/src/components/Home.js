import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';

export default function Home() {
    const token = localStorage.getItem('token')
    return(
     !token ? <Login/> : <AddressForm/>
    )
}
