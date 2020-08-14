import React, { useContext } from 'react';
import BurgerButton  from '../Burger/BurgerSec';
import { LeftSideBarContext } from '../LeftNavBar';
import './style.scss';

const TopSec = () => {
  const { setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div>
    <div className="LeftSideBar__TopSection">
      <BurgerButton
        onClick={() => setIsShowSidebar(true)}
      />
    </div>
      <div style={{marginTop:"10px"}}>
        <h1>DASHBOARD</h1>
      </div>
      
    </div>
  );
};

export default TopSec;