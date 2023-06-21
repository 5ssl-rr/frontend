import * as yup from 'yup';

const addressSchema = yup.object().shape({
  house: yup.number().required('valid house number required'),
  street: yup.string().trim().required('street name is required'),
  delivery: yup.string().trim().required('delivery status is required')
})


export { addressSchema };