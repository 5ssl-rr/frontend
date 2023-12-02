import { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import EditDeliveryForm from './EditDeliveryForm';

export default function Street(props) {
  const [addresses, setAddresses] = useState([]);
  const [streets, setStreets] = useState([]);
  const [activeStreet, setActiveStreet] = useState();
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [delivery, setDelivery] = useState('all');
  const [hideNo, setHideNo] = useState(false);
  const [edit, setEdit] = useState({});
  

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:1447/api/address/')
      .then((res) => {
        setAddresses(res.data);
        const streetList = [
          ...new Set(res.data.map((addresses) => addresses.street)),
        ];
        setStreets(streetList);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    setActiveStreet(streets[0])
    console.log(streets)
  }, [streets])
  useEffect(()=>{
    console.log(edit)
  }, [edit])
  useEffect(() => {
    let filteredArray = addresses.filter(
      (address) => address.street === activeStreet
    );
    if (delivery !== 'all')
      filteredArray = filteredArray.filter(
        (address) => address.delivery === delivery
      );
    if (hideNo === true)
        filteredArray = filteredArray.filter(
          (address) => address.delivery !== 'no'                                                
        )
    setFilteredAddresses(filteredArray);
  }, [addresses, activeStreet, delivery, hideNo]);

  if (!streets) {
    return <h3>failed to retrieve street information</h3>;
  }

  
  const toggleEdit = (addressId) => {
    setEdit({[addressId]: !edit[addressId]})
    
  }


  return (
    <>
      <p>{delivery}</p>
      <div className='addresses-container'>
        <div className='street-container'>
          <p>{activeStreet}</p>
          {streets.map((street) => {
            return (
              <button key={street} onClick={() => setActiveStreet(street)}>
                {street}
              </button>
            );
          })}
        </div>
        <div className='address-table'>
          <table border='1'>
            <tbody>
              <tr>
                <th>House#</th>
                <th>Delivery</th>
              </tr>
              {filteredAddresses.map((address) => (
                <tr key={address.id}>
                  <td>{address.house}</td>
                  <td>{address.delivery}{!edit[address.id] ? <button onClick={() => toggleEdit(address.id)}>Edit</button> : <EditDeliveryForm addressId = {address.id}/>} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {/* Add function to generate buttons dynamically in order to accomodate custom values */}
          <button onClick={() => setDelivery('all')}>All</button>
          <button onClick={() => setDelivery('yes')}>Yes</button>
          <button onClick={() => setDelivery('email')}>Email</button>
          {
            hideNo === false ?
          <button onClick={() => setHideNo(true)}>Hide No</button> 
          :
          <button onClick={() => setHideNo(false)}>Display No</button>
          }     
        </div>
      </div>
    </>
  );
}
