import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Address from './Address';
import Street from './Street';
import Delivery from './Delivery';

export default function Home() {
  const token = localStorage.getItem('token');
  

  // useEffect(() => {
  //   console.log(addresses);
  //   console.log(streets);
  // }, [addresses, streets]);

  return (
    <>
      <nav>
        <Link to='/logout'>Logout</Link>
      </nav>
      <AddressForm />
     <Street/>
     <Delivery/>
    </>
  );
}
