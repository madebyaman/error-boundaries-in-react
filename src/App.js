import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import NoErrorHandling from './components/NoErrorHandling';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>No error handling</Tab>
          <Tab>Error handling with try/catch</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <NoErrorHandling />
          </TabPanel>
          <TabPanel>Second</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
