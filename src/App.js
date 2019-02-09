import React, { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route path = '/home' component={Home}/>
              <Route path = '/about' component={About}/>
              <Route path = '/contacts' component={Contacts}/>
              <Route path = '/:post_id' component = {Post}/>
            </Switch>
       </div>
      </BrowserRouter>
      );
  }
}

export default App;
