// React
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// StyleSheets
import './App.css';

// Pages
import Main from './@Views/Main';

export default class App extends React.Component {
    render() {
        return (
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Main />}
              ></Route>
            </Routes>
          </Router>
        );
    }
}
