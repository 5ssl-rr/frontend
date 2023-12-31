import * as yup from 'yup';

const addressSchema = yup.object().shape({
  house: yup.number().required('valid house number required'),
  street: yup.string().trim().required('street name is required'),
  delivery: yup.string().trim().required('delivery status is required')
})

const loginSchema = yup.object().shape({
  password: yup.string().trim().required()
})

const deliverySchema = yup.object().shape({
  delivery: yup.string().trim().required()
})

const editDeliveryFormSchema = yup.object().shape({
  delivery: yup.string().trim()
})

export { addressSchema, loginSchema, deliverySchema, editDeliveryFormSchema };
