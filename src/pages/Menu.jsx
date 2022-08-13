import React from 'react';
import NavTopMenuData, { NavSecond } from '../jsondata/data';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/Menu.css';

const Menu = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '8px',
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'end',
          }}
        >
          <div style={{ flex: '90%' }}></div>
          <div style={{ flex: '10%', marginTop: '10px', marginRight: '10px' }}>
            <Link to="/">
              <ClearIcon style={{ width: '40px', height: '40px' }} />
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <ul
            style={{
              width: '100%',
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              paddingBottom: '10px',
            }}
          >
            {NavTopMenuData.map((v, ind) => {
              return (
                <Link
                  className="aLink"
                  to={v.link}
                  style={{ textDecoration: 'none' }}
                >
                  <li className="mtItem">{v.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="btnContainer">
          <a
            className="mbtn youtube"
            href="https://www.youtube.com/channel/UCmKerU5uHmrVbdPYC-ksU8A"
            target="_blank"
          >
            Youtube
          </a>
          <a
            className="mbtn ecampus"
            href="http://ecampus.lbsharda.com/"
            target="_blank"
          >
            E-Campus
          </a>
        </div>

        <div>
          {NavSecond.map((value, index) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{value.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {value.data.map((val, i) => {
                      return (
                        <Link to={val.link}>
                          <li>{val.title}</li>
                        </Link>
                      );
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
