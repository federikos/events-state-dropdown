import React, { useState } from 'react';

const list = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
];

export default () => {
  const [ selected, setSelected ] = useState(null);

  const handleClick = (e, name) => {
    e.preventDefault();
    setSelected(name);
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {
        list.map((li, i) => (
          <li key={i} style={selected === li ? {color: '#5380F7'} : undefined}><a href='#' onClick={(e) => handleClick(e, li)}>{li}</a></li>
        ))
      }
  </ul>
  )
}