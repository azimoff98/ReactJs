import React from 'react';
import {Link, Navlink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    console.log(props) 
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">React Router</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    
                    
                </ul>
                
            </div>
        </nav>
    )
}

export default withRouter(Navbar);



