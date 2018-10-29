import React, { Component } from 'react';
import Developer from './components/Developer';
import AddDeveloper from './components/AddDeveloper';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        developers : []
    }
  }



  deleteDeveloper = (id) => {
    let developers = this.state.developers.filter(developer => {
      return developer.id !== id
    });

    this.setState({developers})
  }

  addDeveloper = (developer) => {
    developer.id = Math.random();
    let developers = [...this.state.developers, developer]
    this.setState({developers})
  }
  

  render() {
    return (
      <div>
        <h1 className="center">List of Developers</h1>
        <Developer developers = {this.state.developers} deleteDeveloper = {this.deleteDeveloper}></Developer>
        <AddDeveloper addDeveloper = {this.addDeveloper}></AddDeveloper>
      </div>
    );
  }
} 
export default App;
