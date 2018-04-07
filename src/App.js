import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/Navigation';
import Main from './components/Main';

export const BASE_NAME = '/github-pages-didrik';

export default class App extends Component {  
  render() {
    return (
      /*TODO:Use location.pathname provided by react-router in the Navigation component in the future, but for now I export BASE_NAME*/
      <Router basename={BASE_NAME}>
        <div id="ReactApp">
          <Navigation/>
          <Main/>
        </div>
      </Router>
    );
  }
}