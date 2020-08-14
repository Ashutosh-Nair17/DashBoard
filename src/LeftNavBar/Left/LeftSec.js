import React, { useContext } from 'react';
import BurgerButton from '../Burger/BurgerSec';
import { LeftSideBarContext } from '../LeftNavBar';
import './style.scss';
import home from './home.png';
import dash from './dash.png';
import admin from './admin.png';

const LeftSec = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick={() => setIsShowSidebar(false)}
        />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="#"
          >
            <img src={home} title="Home" alt="home"/>
          </a>
        </li>
        <li>
          <a
            href="#"
          >
            <img src={dash} title="Dashboard" alt="dashboard"/>
          </a>
        </li>
        <li>
         <a
            href="#"
          >
            <img src={admin} title="Admin Login" alt="admin"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSec;