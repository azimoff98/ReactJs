import React, { Component } from 'react';
import GuessGame from './components/GuessGame';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
   

  

  render() {

    return (
      <div>
        <GuessGame/>
      </div>
    );
  }
} 
export default App;
