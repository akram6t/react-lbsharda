import React from 'react';
import aboutData from '../../jsondata/aboutdata';

const About1 = () => {
  return (
    <div>
      <div>
        <div>
          {aboutData.map((value, index) => {
            return (
              <div>
                <h4>{value.title}</h4>
                {value.data.map((v, i) => {
                  return <li>{v.item}</li>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About1;
