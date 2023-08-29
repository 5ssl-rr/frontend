import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Address from './Address';

export default function Home() {
  const token = localStorage.getItem('token');
  const [addresses, setAddresses] = useState([])
  const [streets, setStreets] = useState([])
  
  useEffect(()=>{
      axiosWithAuth()
      .get('http://localhost:1447/api/address/')
      .then((res) => {
          setAddresses(res.data)
          const streetList = [...new Set(res.data.map(addresses => addresses.street))]
          setStreets(streetList)
      })
      .catch((err) => {
          console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(addresses);
    console.log(streets)
  }, [addresses, streets]);


  return (
    <>
      <nav>
        <Link to='/logout'>Logout</Link>
      </nav>
      <AddressForm/>
      <div className='addresses-container'>
      {addresses.map((address) => {
        return(
          <Address
          address={address}
          />
        )
      })}
      </div>
    </>
  );
}
