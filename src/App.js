import React, { Component } from 'react';
import MainNav from './components/MainNav';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
        <div>
          <MainNav/>
          <Main/>
        </div>
    );
  }
}
