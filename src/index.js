import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

// Content container
const RootContainer = document.getElementById('root');

// Content structure
const RootStructure = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Application rendering
ReactDOM.render( RootStructure, RootContainer );

// Performance monitoring
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

reportWebVitals(console.log());