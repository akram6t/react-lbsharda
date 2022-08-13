import React from 'react';
import NavTopMenuData, { NavSecond } from '../jsondata/data';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

const Menu = () => {
  return (
    <div>
      <div>
        <div>
          <Link to="/">
            <ClearIcon />
          </Link>
        </div>
        <ul>
          {NavTopMenuData.map((val, index) => {
            return (
              <Link to={val.link}>
                <li>{val.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
