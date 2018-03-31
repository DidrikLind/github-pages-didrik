import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DrawerNav from './components/DrawerNav';
import Main from './components/Main';


const muiTheme = getMuiTheme({
  palette: {},
  fontFamily: 'Papyrus, fantasy'
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
