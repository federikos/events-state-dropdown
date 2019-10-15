import React, { useState } from 'react';
import Button from './Button';
import DropdownList from './DropdownList';

export default () => {
  const [ showDropdown, setShowDropdown ] = useState(false);

  return (
    <div className='general-wrapper'>
      <div className="container">
        <div data-id="wrapper" className="dropdown-wrapper open">
          <Button setShowDropdown={setShowDropdown} />
          {showDropdown && <DropdownList />}
        </div>
      </div>
    </div>
  )
}