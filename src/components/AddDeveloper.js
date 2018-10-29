import React, { Component } from 'react'

class AddDeveloper extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name : null,
            language : null,
            salary : null
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDeveloper(this.state)
    }
    
    
    render() { 
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "name">Name : </label>
                    <input type = 'text' id = 'name' onChange = {this.handleChange}/>
                    <label htmlFor = "language">Language : </label>
                    <input type = 'text' id = 'langauge' onChange = {this.handleChange}/>
                    <label htmlFor = "name">Salary : </label>
                    <input type = 'text' id = 'salary' onChange = {this.handleChange}/>
                    <button>Add Developer</button>
                </form>
            </div>
                       
         );
    }
}
 
export default AddDeveloper;