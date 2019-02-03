import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contacts = (props) => {
    return(
        <div className="container">
            <h4 className="center">Contacs</h4>
            <div className="center">
            <ul>
                <li>055-590-68-82</li>
                <li>070-326-80-00</li>
            </ul>
            </div>
            
        </div>
    )
}

export default Rainbow(Contacts);