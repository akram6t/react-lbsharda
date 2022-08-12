import React from 'react';
import './Home.css';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
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

export default Home;
