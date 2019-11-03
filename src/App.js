import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DatePage from './DatePage';
import ResultsPage from './ResultsPage';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin-scores' component={DatePage} />
          <Route exact path='/admin-scores/results' component={ResultsPage} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
