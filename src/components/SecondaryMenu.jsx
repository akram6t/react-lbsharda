import React from 'react';
import { Link } from 'react-router-dom';
import { NavSecond } from '../jsondata/data';
import '../css/sSecondaryMenu.css';
import { Link } from 'react-router-dom';

const SecondaryMenu = () => {
  return (
    <div className="slist_container">
      <ul className="smenu_list">
        {NavSecond.map((value, index) => {
          return (
            <li>
              <h4 class="menu-title">{value.title}</h4>
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
