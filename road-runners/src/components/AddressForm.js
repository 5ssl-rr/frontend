import axios from 'axios';
import { useForm } from '../hooks/useForm';
import { addressSchema } from '../validation/schema';

export default function AddressForm() {
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
    e.preventDefault()
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
        <label htmlFor='house'>house</label>
        <input
          id='house'
          value={formValues.house}
          type='number'
          name='house'
          onChange={handleChange}
        />
        <label htmlFor='house'>house</label>
        <input
          id='street'
          value={formValues.street}
          name='street'
          onChange={handleChange}
        />
        <label htmlFor='delivery' />
        <input
          id='delivery'
          value={formValues.delivery}
          name='delivery'
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
