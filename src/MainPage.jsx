import React from 'react';
import './MainPage.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SecondaryMenu from './components/SecondaryMenu';

const MainPage = () => {
  return (
    <div>
      <div classname="navbar">
        <Header />
      </div>
      <div className="secondary_menu">
        <SecondaryMenu />
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
