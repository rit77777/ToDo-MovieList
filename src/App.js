import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

import './App.css';
import './lib/font-awesome/css/all.min.css';

import { MovieProvider } from './context/GlobalState';

export default function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <WatchList />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
          <Route path='/watched'>
            <Watched />
          </Route>
        </Switch>
      </Router>
    </MovieProvider>
  );
}
