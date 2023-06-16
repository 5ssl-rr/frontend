import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  firstName: yup.string().trim().required('first name is required'),

  lastName: yup.string().trim().required('last name is required'),

  email: yup
    .string()
    .trim()
    .required('email is required')
    .email('must be valid e-mail address'),

  password: yup
    .string()
    .trim()
    .min(5, 'password must be at least 5 characters')
    .required('password is required'),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('must be valid email')
    .required('email is required'),
  password: yup.string().trim().required('password is required'),
});

const macroSchema = yup.object().shape({
  fat: yup.number(),
  protein: yup.number(),
  carb: yup.number(),
});

export { registrationSchema, loginSchema, macroSchema };
