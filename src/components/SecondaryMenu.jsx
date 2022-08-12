import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryMenu = () => {
  return (
    <div>
      <ul className="smenu_list">
        <Link to="/page">
          <li>News</li>
        </Link>
      </ul>
    </div>
  );
};

export default SecondaryMenu;
