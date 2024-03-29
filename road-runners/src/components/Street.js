import { useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import EditDeliveryForm from './EditDeliveryForm';
import { useNavigate } from 'react-router-dom';
import { StyledTableHeader, StyledMenuDiv } from '../styles/StreetStyle';
import NavMenu from './NavMenu';
import {Link} from 'react-router-dom'

export default function Street(props) {
  const [addresses, setAddresses] = useState([]);
  const [streets, setStreets] = useState([]);
  const [activeStreet, setActiveStreet] = useState();
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [delivery, setDelivery] = useState('all');
  const [hideNo, setHideNo] = useState(false);
  const [edit, setEdit] = useState({});
  const [showEditButton, setShowEditButton] = useState(false)
  const [update, setUpdate] = useState(false)
  
  const navigate = useNavigate()
const {setShowNav} = props

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
        if(err.response.status === 401){
          localStorage.removeItem('token')
          setShowNav(false)
          navigate('/')
        }
      });
      setUpdate(false)
  }, [navigate, setShowNav, update]);

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
    <StyledMenuDiv>
    <NavMenu showEditButton={showEditButton} setShowEditButton={setShowEditButton}/>
    <Link to='/logout'>Logout</Link>
    </StyledMenuDiv>
      <div className='addresses-container'>
        <div className='street-container'>
          <p>{activeStreet}</p>
          {streets.sort((a,b) => a.id-b.id).map((street) => {
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
                <StyledTableHeader>House#</StyledTableHeader>
                <StyledTableHeader>Delivery</StyledTableHeader>
              </tr>
              {filteredAddresses.sort((a,b)=> a.house-b.house).map((address) => (
                <tr key={address.id}>
                  <td>{address.house}</td>
                  <td>{address.delivery}{showEditButton && (!edit[address.id] ? <button onClick={() => toggleEdit(address.id)}>Edit</button> : <EditDeliveryForm addressId = {address.id} toggleEdit={toggleEdit} update={update} setUpdate={setUpdate}/>)} </td>
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
