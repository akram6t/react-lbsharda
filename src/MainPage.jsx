import React from 'react';
import './MainPage.css';
import Header from './Header';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <div classname="navbar">
        <Header />
      </div>
      <div className="content"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
