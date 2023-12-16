import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Address from './Address';
import Street from './Street';
import Delivery from './Delivery';
import NavMenu from './NavMenu';

export default function Home(props) {
  const token = localStorage.getItem('token');
const {setShowNav} = props
  // useEffect(() => {
  //   console.log(addresses);
  //   console.log(streets);
  // }, [addresses, streets]);

  return (
    <>
      <AddressForm />
      <Street setShowNav={setShowNav} />
    </>
  );
}
