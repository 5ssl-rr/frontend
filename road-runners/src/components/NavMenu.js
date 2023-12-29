import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu(props) {
  const [open, setOpen] = useState(false);
const {showEditButton, setShowEditButton} = props;
  const toggleDropdown = () => setOpen(!open);
  console.log(open);
  return (
    <div className='dropdown'>
      <button className='dropdown-button' onClick={toggleDropdown}>
        MENU
      </button>
      {open && (
        <ul className='dropdown-content'>
          <li>
            <Link to='address-form'>Address Form</Link>
          </li>
          <li>
            <button onClick={() => setShowEditButton(!showEditButton)}>Edit Delivery Status</button>
            </li>
        </ul>
      )}
    </div>
  );
}
