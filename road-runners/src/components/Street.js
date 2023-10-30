import { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
export default function Street(props) {
  const [addresses, setAddresses] = useState([]);
  const [streets, setStreets] = useState([]);
  const [activeStreet, setActiveStreet] = useState();
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [delivery, setDelivery] = useState('all');

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:1447/api/address/')
      .then((res) => {
        setAddresses(res.data);
        const streetList = [
          ...new Set(res.data.map((addresses) => addresses.street)),
        ];
        setStreets(streetList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let filteredArray = addresses.filter(
      (address) => address.street === activeStreet
    );
    if (delivery !== 'all')
      filteredArray = filteredArray.filter(
        (address) => address.delivery === delivery
      );
    setFilteredAddresses(filteredArray);
  }, [addresses, activeStreet, delivery]);

  if (!streets) {
    return <h3>failed to retrieve street information</h3>;
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
                  <td>{address.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={() => setDelivery('all')}>All</button>
          <button onClick={() => setDelivery('yes')}>Yes</button>
        </div>
      </div>
    </>
  );
}
