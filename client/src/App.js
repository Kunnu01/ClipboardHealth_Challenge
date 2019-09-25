import React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import logo from './bunny.png';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './theme';
import { Button } from '@material-ui/core';
import { ShiftDetails } from './containers';

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to Clipboard Health
      </p>
      <Button variant="outlined" color="secondary" component={Link} to="/shifts">
        Click here
      </Button>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>        
            <Switch>
              <Route path="/shifts" component={ShiftDetails} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    </div>
  );
}

export default App;
