import React, { Component } from 'react';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }



  incrementCount = (e) => {
    let count = this.state.count + 1
    this.setState({count})
  }

  decrementCount = (e) => {
    let count = this.state.count -1
    this.setState({count})
  }

  resetCount = (e) => {
    this.setState({
      count : 0
    })
  }

  componentDidUpdate(){
    console.log(this.state.count)
  }
  

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick = {this.incrementCount}>
          INCREMENT COUNT
        </button>
        <button onClick = {this.decrementCount}>
          DECREMENT COUNT
        </button>
        <button onClick = {this.resetCount}>
          RESET COUNT
        </button>
      </div>
    );
  }
} 
export default App;
