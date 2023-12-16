import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function NavMenu() {
  const [open, setOpen] = useState(false);

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
            {/* <a href='address-form'>Home</a> */}
            <Link to='address-form'>Address Form</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
