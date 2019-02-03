import React, { Component } from 'react';

const Rainbow = (WrappedComponent) => {

    const colors = ["red", "pink", "green", "green", "blue"];
    const randomColor = colors[Math.floor( Math.random()*5 )];
    const className = randomColor + '-text';

    return(props) => {
        return(
            <div className = {className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow;