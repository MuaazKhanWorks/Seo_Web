import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Drop = () => {
  const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle(true);
  };

  const hide = () => {
    setToggle(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        marginRight: '10px',
      }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <span style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
        About Us <ArrowDropDownIcon />
      </span>
      {toggle && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'green',
            padding: '15px',
            listStyle: 'none',
          }}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <li>ABCssds</li>
          <li>DEFss</li>
          <li>ABCs</li>
          <li>ABC</li>
          <li>DEF</li>
          <li>AB</li>
        </ul>
      )}
    </div>
  );
};

export default Drop;
