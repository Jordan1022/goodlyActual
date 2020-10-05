import React from 'react';
import goodlyLogo from './goodlyLogo.svg';
import './App.css';
import './LoginForm.js';
import {Switch, Route} from 'react-router-dom'
import landingPage from './pages/landingPage';

const App = () => {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={landingPage}/>
      </Switch>
    </div>
  );
}

export default App;
