import React from 'react';
import './style.scss';

const BurgerSec = ({ onClick }) => {
  return (
    <div
      className="LeftSideBar__BurgerButton"
      role="button"
      onClick={onClick}
    >
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default BurgerSec;