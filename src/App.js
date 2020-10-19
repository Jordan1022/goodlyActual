import React from 'react';
import './App.css';
import './LoginForm.js';
import {Switch, Route} from 'react-router-dom'
import landingPage from './pages/LandingPage/landingPage';
import contact from './pages/ContactPage/contactPage';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const theme = {};
const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={landingPage}/>
        <Route exact path="/contact" component={contact}/>
        {/* <Route exact path="" component={}/> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
