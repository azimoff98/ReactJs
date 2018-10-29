import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }


  handleChange = (e) => {
    let text = e.target.value;
    this.setState({
      text : text
    })
  }

  handleClick = (e) => {
    document.getElementById('key').innerHTML = this.state.text
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange = {this.handleChange}/>
        <button onClick = {this.handleClick} >Click Me</button>
        <p id = 'key'></p>
      </div>
    );
  }
}
export default App;
