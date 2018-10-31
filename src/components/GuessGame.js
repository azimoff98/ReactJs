import React, { Component } from 'react';
import { Modal } from 'antd';

class GuessGame extends Component {
    constructor(props){
        super(props);
        this.state = { 
            input : null,
            random : Math.floor(Math.random() * 100),
            attemp : 1,
            text : '',
            color : ''
        }
    }



    componentDidMount(){
        console.log(this.state.random, this.state.input)
    }

    
   


    handleChange = (e) => {
        const input = e.target.value
        this.setState({
            input
        })
    }

    check = (e) => {
        if(this.state.random == this.state.input){
            this.setState({
               text : 'Congratulations you guessed correctly',
               color : 'green' 
            })
            
        }else {
            if(this.state.input < this.state.random){
                this.setState({
                    text : 'number is greater than ' + this.state.input,
                    color : 'red'
                })
            }
            if(this.state.input > this.state.random){
                this.setState({
                   text : 'number is less than ' + this.state.input,
                   color : 'red' 
                })
            }
            const attemp = this.state.attemp + 1;
            
            this.setState({
                 attemp
            })
            console.log(this.state.attemp + '.' +  this.state.input + ' wrong')
        }
    }



    render() { 
     
        return ( 
            <div>
                <div className = "center" style = {{width:350, margin : '0 auto', }}>
                    <h6>Find a randomly guessed number between 1 and 100</h6>
                    <input  placeholder = "number" type = 'number' name = "input" onChange = {this.handleChange}/>
                    <button className = "btn btn-warning" onClick = {this.check} >Check</button>
                    <p style = {{color : this.state.color}}>{this.state.text}</p>
                </div>
                <Modal/>
                    
            </div>
         );
    }
}
 
export default GuessGame;
