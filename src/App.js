import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerNav from './components/DrawerNav';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <DrawerNav/>
      </MuiThemeProvider>
    );
  }
}

export default App;
