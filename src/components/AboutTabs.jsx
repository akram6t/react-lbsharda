import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import About1 from './abouttabsitem/About1';
import About2 from './abouttabsitem/About2';
import About3 from './abouttabsitem/About3';
import About4 from './abouttabsitem/About4';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            sx={{ backgroundColor: 'white' }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="About" value="1" />
            <Tab label="Principal's Message" value="2" />
            <Tab label="Commities" value="3" />
            <Tab label="Smriti Award" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About1 />
        </TabPanel>
        <TabPanel value="2">
          <About2 />
        </TabPanel>
        <TabPanel value="3">
          <About3 />
        </TabPanel>
        <TabPanel value="4">
          <About4 />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
