import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Facilities from './Pages/facilities';
import Rooms from './Pages/room';
import Contact from './Pages/contact';
import Hero from './Components/HeroSection/Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/Facilities">
            <Facilities />
          </Route>
          <Route exact path="/Rooms">
            <Rooms />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Redirect to="/Home" />
        </Switch>
      </BrowserRouter>

      {/* <Hero /> */}
    </div>
  );
}

export default App;
