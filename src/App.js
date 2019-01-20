import React, { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path = '/home' component={Home}/>
          <Route path = '/about' component={About}/>
          <Route path = '/contacts' component={Contacts}/>
       </div>
      </BrowserRouter>
      );
  }
}

export default App;
