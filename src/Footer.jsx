import React from 'react';
import './css/sfooter.css';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <h4 className="footerheader">Important Links</h4>
        <a className="social_link" href="http://mpbse.nic.in/">
          MPBSE
        </a>
        <a className="social_link" href="http://www.bubhopal.ac.in/">
          BU, Bhopal
        </a>
        <a className="social_link" href="https://ncte.gov.in/">
          NCTE
        </a>
        <a className="social_link" href="http://highereducation.mp.gov.in/">
          Higher Education
        </a>
      </div>

      <div className="second">
        <h4 className="footerheader">Contact</h4>
        <span className="faddress">
          <CallIcon />
          <span>07577-292067</span>
        </span>
        <span className="faddress">
          <MailIcon />
          <span>lbsharda@gmail.com</span>
        </span>
        <span className="faddress">
          <LanguageIcon />
          <a
            className="social_link"
            href="https://lbsharda.com"
            target="_blank"
          >
            lbsharda.com
          </a>
        </span>
      </div>
      <div className="third">
        <h4 className="footerheader">Social</h4>
        <span className="faddress">
          <YouTubeIcon />
          <a
            className="social_link"
            href="https://www.youtube.com/channel/UCmKerU5uHmrVbdPYC-ksU8A"
            target="_blank"
          >
            Youtube
          </a>
        </span>
        <span className="faddress">
          <FacebookIcon />
          <a
            className="social_link"
            href="https://www.facebook.com/lbs.harda.9/"
            target="_blank"
          >
            Facebook
          </a>
        </span>
        <span className="faddress">
          <InstagramIcon />
          <a
            className="social_link"
            href="https://www.instagram.com/lbscollegeharda/"
            target="_blank"
          >
            Instagram
          </a>
        </span>
      </div>
      <div className="fourth">
        <h4 className="footerheader">Address</h4>
        <div className="address">
          Handia Road, National Highway 59A Harda, Madhya Pradesh 461331
        </div>
      </div>
    </div>
  );
};

export default Footer;
