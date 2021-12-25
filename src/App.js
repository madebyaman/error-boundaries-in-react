import React, { lazy, Suspense } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import ErrorHandlingErrorBoundaries from './components/ErrorHandlingErrorBoundaries';
const NoErrorHandling = lazy(() => import('./components/NoErrorHandling'));
const ErrorHandlingTry = lazy(() =>
  import('./components/ErrorHandlingTryCatch')
);

function App() {
  return (
    <div className="App" style={{ maxWidth: '980px', margin: '0 auto' }}>
      <Tabs>
        <TabList>
          <Tab>No error handling</Tab>
          <Tab>With try/catch</Tab>
          <Tab>With React Error Boundaries</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Suspense fallback="loading...">
              <NoErrorHandling />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback="loading...">
              <ErrorHandlingTry />
            </Suspense>
          </TabPanel>
          <TabPanel>
            <Suspense fallback="loading...">
              <ErrorHandlingErrorBoundaries />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
