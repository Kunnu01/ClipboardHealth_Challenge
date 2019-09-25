import React from 'react';
import logo from './bunny.png';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Clipboard Health
          </p>
        </header>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
