import React from 'react';
import { Link } from 'react-router-dom';
import { NavSecond } from '../jsondata/data';
import '../css/sSecondaryMenu.css';

const SecondaryMenu = () => {
  return (
    <div className="slist_container">
      <ul className="smenu_list">
        {NavSecond.map((value, index) => {
          return (
            <li>
              <li class="menu-title">{value.title}</li>
              <ul class="menu_dropdown">
                {value.data.map((val, i) => {
                  return (
                    <>
                      <Link to={val.link}>
                        <li className="sItem">{val.title}</li>
                      </Link>
                    </>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SecondaryMenu;
