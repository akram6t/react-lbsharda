import React from 'react';
import { Link } from 'react-router-dom';
import NavTopMenuData from './jsondata/data';
import './css/sHeader.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <Link to="/">
            <img
              className="app_logo"
              src="https://res.cloudinary.com/lbs-harda/image/upload/v1658917314/CollegeLogo_dqno4q.png"
              alt=""
            />
          </Link>
          <span className="name_container">
            <h4 className="app_name short_name">LBS HARDA</h4>
            <h4 className="app_name long_name">
              LAL BAHADUR SHASTRI COLLAGE HARDA (M.P)
            </h4>
          </span>
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
            <a
              href="https://www.youtube.com/channel/UCmKerU5uHmrVbdPYC-ksU8A"
              target="_blank"
            >
              <div className="nav_button btn_youtube">Youtube</div>
            </a>
            <a href="http://ecampus.lbsharda.com/" target="blank">
              <div className="nav_button btn_ecampus">E-Campus</div>
            </a>
          </ul>
          <Link to="/menu">
            <span className="btnopenMenu">
              <MenuIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
