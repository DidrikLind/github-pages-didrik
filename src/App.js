import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DrawerNav from './components/DrawerNav';
import Main from './components/Main';

import {orange900} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {}
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {/*only one child under MuiThemeProvider. Read why l8r!?: https://github.com/erikras/react-redux-universal-hot-example/issues/1153 */}
        <div>
          <DrawerNav/>
          <Main/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
