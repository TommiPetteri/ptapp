import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Trainiglist';
import Home from './components/Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">

      <Router>
        <AppBar position="static">
          
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">HOME</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/customerlist">CUSTOMERS</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/traininglist">TRAININGS</Link>
            </Typography>
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
        </Switch>

      </Router>
    </div>
  );
}

export default App;
