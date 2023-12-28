
import axiosWithAuth from '../utilities/axiosWithAuth';
import { useForm } from '../hooks/useForm';
import { addressSchema } from '../validation/schema';
import { useEffect } from 'react';
import { StyledSubmitButton } from '../styles/AddressFormStyle';

export default function AddressForm(props) {
  let initialFormValues = {
    house: 0,
    street: '',
    delivery: '',
  };

  let initialFormErrors = {
    house: 0,
    street: '',
    delivery: '',
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
    axiosWithAuth()
      .post('http://localhost:1447/api/address/new', formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='new-address'>
      <form onSubmit={handleSubmit}>
        <div className='new-address-grid'>
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
          <label htmlFor='delivery'>Delivery: </label>
          <div className='checkbox-container'>
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
        </div>
        <StyledSubmitButton disabled={disabled}>Submit</StyledSubmitButton>
      </form>
    </div>
  );
}
