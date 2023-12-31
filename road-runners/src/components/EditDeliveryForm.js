import axiosWithAuth from '../utilities/axiosWithAuth';
export default function EditDeliveryForm(props) {
  let { addressId, toggleEdit, setUpdate } = props;

  function handleSubmit(e) {
    e.preventDefault()
    const deliveryUpdate = document.getElementById('delivery-update').value;
    axiosWithAuth()
      .patch(`http://localhost:1447/api/address/${addressId}`, {
        delivery: deliveryUpdate,
      })
      .catch((err) => {
        console.log(err);
      });
      toggleEdit(addressId)
      setUpdate(true)
  }

  return (
    <div className='edit-delivery'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='delivery-update' />
        <select id='delivery-update' name='deliveryUpdate'>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
          <option value='email'>Email</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
