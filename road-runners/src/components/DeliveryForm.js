import axios from 'axios'
import { useForm } from '../hooks/useForm';

export default function DeliveryForm() {
  let initialFormValues = {
    houses: '',
  };

  let initialFormErrors = {
    houses: '',
  };

  const [formValues, formErrors, handleChange] = 
  useForm({
      initialFormValues,
      initialFormErrors
  })

function handleSubmit(e){
    e.preventDefault()
    
}

return(
  <div className='update-delivery-status'>
    <form onSubmit={handleSubmit}>
     <label htmlFor='houses'>Houses: </label>
     <input
     id='houses'
     type='text'
     />
    </form>
  </div>
)

}
