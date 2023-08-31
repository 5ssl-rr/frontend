import { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
export default function Street() {
  const [addresses, setAddresses] = useState([]);
  const [streets, setStreets] = useState([]);
  const [activeStreet, setActiveStreet] = useState();
  const [filteredAddresses, setFilteredAddresses] = useState([]);

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
    console.log(activeStreet);
    console.log(addresses);
  }, [activeStreet, addresses]);

  useEffect(() => {
    const filteredArray = addresses.filter(
      (address) => address.street === activeStreet
    );
    setFilteredAddresses(filteredArray);
  }, [addresses, activeStreet]);

  if (!streets) {
    return <h3>failed to retrieve street information</h3>;
  }
  return (
    <>
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
      </div>
    </>
  );
}
