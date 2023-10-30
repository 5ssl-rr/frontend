import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';
import { deliverySchema } from '../validation/schema';

export default function Delivery(props) {
  let {deliveryFilter} = props  
  let initialFormValues = {
    delivery: ''
  };
  let initialFormErrors = {
    delivery: ''
  };
  const formSchema = deliverySchema;

  const [formValues, formErrors, disabled, handleChange ] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });
  



  return (
    <div className='delivery-status'>
      <form>
        <input
          id='delivery-all'
          type='checkbox'
          value='all'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'all'}
        />
        <input
          type='checkbox'
          id='delivery-yes'
          value='yes'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'yes'}
        />
        <input
          id='delivery-email'
          type='checkbox'
          value='email'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'email'}
        />
        <input
          id='delivery-no'
          type='checkbox'
          value='no'
          name='delivery'
          onChange={handleChange}
          checked={formValues.delivery === 'no'}
        />
      </form>
      <p>{formValues.delivery}</p>
    </div>
  );
}
