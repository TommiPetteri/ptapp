import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Trainiglist';
import Home from './components/Home';
import Calendarpage from './components/Calendarpage';
import Statics from './components/Statics'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

function App() {
  return (
    <div className="App">

      <Router>
        <AppBar position="static">
          <Toolbar>
        
            <MenuItem component={Link} to='/'>
              PT-APP
            </MenuItem>
            <MenuItem component={Link} to='/customerlist'>
              Customer
            </MenuItem>
            <MenuItem component={Link} to='/traininglist'>
              Trainings
            </MenuItem>
            <MenuItem component={Link} to='/calendar'>
              Calendar
            </MenuItem>
            <MenuItem component={Link} to='/statics'>
              Statics
            </MenuItem>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customerlist">
            <Customerlist />
          </Route>
          <Route path="/traininglist">
            <Traininglist />
          </Route>
          <Route path="/calendar">
            <Calendarpage />
          </Route>
          <Route path="/statics">
            <Statics />
          </Route>
        </Switch>

      </Router>
    </div >
  );
}

export default App;
