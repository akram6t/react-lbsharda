import React from 'react';
import { Link } from 'react-router-dom';
import NavTopMenuData from './jsondata/data';
import './css/sHeader.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <img
            className="app_logo"
            src="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
            alt=""
          />
          <h4 id="app_name">LBS Harda</h4>
        </div>
        <div className="right">
          <ul className="navList">
            {NavTopMenuData.map((item, index) => {
              return (
                <Link className="navLink" to={item.link}>
                  <li className="navItem">{item.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
