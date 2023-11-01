import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { addressSchema } from '../validation/schema';
import { useEffect } from 'react';

export default function AddressForm() {
  let initialFormValues = {
    house: 0,
    street: '',
    delivery:''
  };

  let initialFormErrors = {
    house: 0,
    street: '',
    delivery: ''
  };

  const formSchema = addressSchema;

  const [formValues, formErrors, disabled, handleChange, setFormValues] =
    useForm({
      initialFormValues,
      initialFormErrors,
      formSchema,
    });

  function handleSubmit(e) {
    // e.preventDefault()
    axios.post('http://localhost:1447/api/address/new', formValues)
    .then((res) => {
      console.log(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  }



  return (
    <div className='new-address'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='house'>House Number: </label>
        <input
          id='house'
          value={formValues.house}
          type='number'
          name='house'
          onChange={handleChange}
        />
        <label htmlFor='street'>Street: </label>
        <input
          id='street'
          value={formValues.street}
          name='street'
          onChange={handleChange}
        />
        <div>
        <label htmlFor='delivery'>Delivery: </label>
        <input
          type='checkbox'
          id='yes'
          value='yes'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'yes'}
        />
        <label htmlFor='yes'>Yes</label>
        <input
          type='checkbox'
          id='email'
          value='email'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'email'}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='checkbox'
          id='no'
          value='no'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'no'}
        />
        <label htmlFor='no'>No</label>
        </div>
        <button disabled={disabled}>submit</button>
      </form>
    </div>
  );
}
