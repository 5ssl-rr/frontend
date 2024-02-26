import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../validation/schema';
import { useForm } from '../hooks/useForm';
import { useState ,useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import  {StyledInput, StyledErrorMessage} from '../styles/LoginStyle';

export default function Login(props) {
 localStorage.removeItem('token');
  
 const [error, setError] = useState('')
  const initialFormValues = {
    password: '',
  };
  const initialFormErrors = {
    password: '',
  };
  const formSchema = loginSchema;

  let navigate = useNavigate();

  const [formValues, formErrors, disabled, handleChange] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:1447/api/auth/login', formValues)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/rr');
      })
      .catch((err) => {
       setError(err.response.data.message)
       console.log(error)
      })
  }

  return (
    <div className='login'>
      <h1>Every moment I live is agony</h1>
      <p>Logonin</p>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='email' />
        <input
          id='email'
          type='email'
          value={formValues.email}
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <p>{formErrors.email}</p> */}
        <label htmlFor='password' />
        <StyledInput
          id='password'
          type='password'
          placeholder='Password'
          value={formValues.password}
          name='password'
          onChange={handleChange}
        />
        <button disabled={disabled}>Submit</button>
        <StyledErrorMessage>{error}</StyledErrorMessage>
      </form>
    </div>
  );
} 
