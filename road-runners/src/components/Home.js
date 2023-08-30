import axiosWithAuth from '../utilities/axiosWithAuth';
import Login from './Login';
import AddressForm from './AddressForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Address from './Address';
import Street from './Street';

export default function Home() {
  const token = localStorage.getItem('token');
  const [addresses, setAddresses] = useState([])
  const [streets, setStreets] = useState([])
  const [activeStreet, setActiveStreet] = useState();
  
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
      <table border="1">
        <body>
        <tr>
            <th>House#</th>
            <th>Delivery</th>
          </tr>
          {addresses.map((address) => (
            <tr>
              <td>{address.house}</td>
              <td>{address.delivery}</td>
            </tr>
           ))}
           
        </body>
      </table>
      {/* {streets.map((street) => {
        return(
          <Street
          street={street} streets={streets}/>
        )
      })} */}
      {/* {addresses.map((address) => {
        return(
          <Address
          address={address}
          />
        )
      })} */}
      
      </div>
    </>
  );
}
